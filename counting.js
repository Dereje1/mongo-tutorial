let mongo = require('mongodb').MongoClient
let ageRequest = parseInt(process.argv[2],10)//must change to integer as arguments coems in as string

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err) throw err
  let collection = db.collection("parrots")//first specify collection
  let query = {age:{$gt:ageRequest}}
  collection.count(query,function(err,d){
    console.log(d)
    db.close()
  })
})
