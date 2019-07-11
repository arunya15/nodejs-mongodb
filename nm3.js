var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("music");
 var myobj = [
 { songname:'Tahniye Thananthaaniye',film:'Rythm',musicDirector:'A.R.Rahman',singer:'Shangar mahadevan'},
 { songname:'Evano oruvan',film:'Alai payuthe',musicDirector:'A.R.Rahman',singer:'Swarnalatha'},
 { songName:'Roja poonthottam',film:'Kannukkul Nilavu',musicDirector:'Illaiyaraja',singer:'unnikirshnan.Anuradha Sriram'},
 {  songName:'Vennilave Venninalve Vinnaithandi',film:'Minsara Kanavu',musicDirector:'A.R.Rahman',singer:'Hariharan Sadhana sargam'},
 {  songName:'Sollamal Thottu Chellum Thendral',film:'Dheena',musicDirector:'Yuvan Shankar Raja',singer:'Hariharan'},  ];
 dbo.collection("songdetails").insertMany(myobj, function(err, res) {
   if (err) throw err;
   console.log("Number of documents inserted: " + res.insertedCount);
   db.close();
 });
});
