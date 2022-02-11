const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://julia:ff47hYkCHZ12yqlq@cluster0.0wxmh.mongodb.net/pitch-project?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbConnection;
module.exports = {
  connect: (callback) => {
    client.connect((err, db) => {
      if (err || !db)
        return callback (err);

        dbConnection = db.db("pitch-project");
        console.log("Connected to MongoDB Atlas");
        callback ();
    });
  },
  getDB : () => {
    return dbConnection
  }
}

