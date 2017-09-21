var mongo = require('mongodb').MongoClient
let sizeRequest = process.argv[2]//must change to integer as arguments coems in as string

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err) throw err
  let collection = db.collection('prices')//first specify collection
  let match = {$match: {size: sizeRequest}}
  let group = {$group: {_id: 'Average', Average: {$avg: '$price'}}}//lot more to learn on match and group and the aggregation pipeline in general see here https://docs.mongodb.com/manual/core/aggregation-pipeline/

  collection.aggregate([match,group],function(err,found){
    if(err) throw err
    console.log(found[0].Average.toFixed(2))//note soultion used toArray , but mine did not need it and actually errors out when I use toArray ??
    db.close()
  })
})
