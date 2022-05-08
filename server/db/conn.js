const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://UserForITPM:dusDA86bZ9HiZz1h@database.ly0ub.mongodb.net/Staff?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("Staff");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },

  getDb: function () {
    return _db;
  },
};