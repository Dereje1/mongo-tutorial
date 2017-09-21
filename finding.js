var mongo = require('mongodb').MongoClient
let ageRequest = parseInt(process.argv[2],10)//must change to integer as arguments coems in as string
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err) throw err
  let collection = db.collection('parrots')//first specify collection
  let query = {age:{$gt:ageRequest}}//first argument for find method

  collection.find(query,function(err,found){
    if(err) throw err
    found.toArray(function(err,documents){//if query found then parse with built in toArray method
      if(err)throw err
      console.log(documents)
      db.close()
    })
  })
})
