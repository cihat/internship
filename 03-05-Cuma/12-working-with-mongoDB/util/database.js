const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  // myFirstDatabase
  MongoClient.connect(
    "mongodb+srv://cihat:RbL6T5WaVn0F3eF0@cluster0.dinb5.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDB;
