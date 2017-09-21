let mongo = require('mongodb').MongoClient
let firstN = process.argv[2]
let lastN = process.argv[3]
let insertedObject = {
  firstName: firstN,
  lastName: lastN
}
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if(err) throw err
  let coll = db.collection('docs')//first specify collection
  coll.insert(insertedObject,function(err,d){
    console.log(JSON.stringify(insertedObject))
    db.close()
  })
})
///something wrong with this module it is not working correctly , but the basic structure of the code is correctly the
//the docs use .then as a promise after the insert, in addition for one record you can use insertOne!!
