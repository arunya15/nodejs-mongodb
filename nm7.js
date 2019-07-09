var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("music");
 var myquery = {  songName:'Sollamal Thottu Chellum Thendral',film:'Dheena',musicDirector:'Yuvan Shankar Raja',singer:'Hariharan'};
 dbo.collection("songdetails").deleteOne(myquery, function(err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   db.close();
 });
});
