let mongo = require('mongodb').MongoClient
let dBase = process.argv[2]

mongo.connect("mongodb://localhost:27017/"+dBase, function(err, db) {
  if(err) throw err
  let collection = db.collection(process.argv[3])//first specify collection
  let query = {"_id":process.argv[4]}
  collection.remove(query,function(err,d){
    db.close()
  })
})
