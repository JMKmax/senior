/*
* @Author: jing
* @Date:   2019-03-27 19:09:28
* @Last Modified by:   jing
* @Last Modified time: 2019-03-27 20:35:17
*/
cconst MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'test-driver';

MongoClient.connect(url, function(err, client) {
  const adminDb = client.db(dbName).admin();
})