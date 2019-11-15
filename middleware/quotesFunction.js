const keys = require('../config/keys')
var MongoClient = require('mongodb').MongoClient;
require('dotenv').config()                       
module.exports = {
  FindinCol1: function() {
    return MongoClient.connect(process.env.DB).then(function(client) {
        let dbs = client.db('test');
        let collection = dbs.collection('quotes')
      return collection.find().toArray();
    }).then(function(items) {
      return items;
    });
  }
};