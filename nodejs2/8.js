var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function(err, db) {

  if (err) throw err;

  var dbo = db.db("student");

  var query = {$and:[{"maths_marks":{$gt:50}},{"english_marks":{$gt:50}},{"science_marks":{$gt:50}}]};

  dbo.collection("studentmarks").find(query, { projection: {_id:0,science_marks:0,english_marks:0,maths_marks:0} }).toArray(function(err, result) {

    if (err) throw err;

    console.log(result);

    db.close();

  });

});
