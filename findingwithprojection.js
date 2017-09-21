var mongo = require('mongodb').MongoClient
let ageRequest = parseInt(process.argv[2],10)//must change to integer as arguments coems in as string
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err) throw err
  let collection = db.collection('parrots')//first specify collection
  let query = {age:{$gt:ageRequest}}//first argument for find method
  let projection = { age: 1, name: 1 ,_id:0}//second argument for find method is projection, limit the fields returned

  collection.find(query,projection,function(err,found){
    if(err) throw err
    found.toArray(function(err,documents){
      if(err){console.log("there was an error!")}
      console.log(documents)
      db.close()
    })
  })
})
