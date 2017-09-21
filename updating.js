let mongo = require('mongodb').MongoClient
let dBase = process.argv[2]

mongo.connect("mongodb://localhost:27017/"+dBase, function(err, db) {
  if(err) throw err
  let collection = db.collection('users')//first specify collection
  let query = {"age":30}
  let toUpdate = {$set:{"age":40}}
  collection.update(query,toUpdate,function(err,d){
    db.close()
  })
})
