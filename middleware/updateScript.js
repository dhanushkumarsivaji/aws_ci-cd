const keys = require('../config/keys')
var MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
MongoClient.connect(process.env.DB, function(err, client) {
  if (err) throw err;
  let dbs = client.db('test');
  let collection = dbs.collection('quotes')
  var myquery = { quotes: "Day One or One Day, You Decide" };
  var newvalues = { $set:{ quotes:"Day One or One Day, You Decide !!!"} };
  collection.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });
});