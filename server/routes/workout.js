
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId

const WorkoutModel = require("../models/workout");

// This section will help you get a list of all the records.
recordRoutes.route("/workout/all").get(function (req, res) {
    let db_connect = dbo.getDb("Staff");
    db_connect
      .collection("workouts")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  // This section will help you create a new record.
recordRoutes.route("/workout/add").post(function (req, response) {
    let db_connect = dbo.getDb();

    const member = new WorkoutModel({
        name:req.body.name,
        date:req.body.date,
        day1:req.body.day1,
        day2:req.body.day2,
        day3:req.body.day3,
        day4:req.body.day4,
        day5:req.body.day5,
        day6:req.body.day6,
        day7:req.body.day7
    });
    
    db_connect.collection("workouts").insertOne(member, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

  // This section will help you delete a record
  recordRoutes.route("/workout/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("workouts").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });

  // This section will help you get a single record by id
recordRoutes.route("/workout/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("workouts")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });

  // This section will help you update a record by id.
recordRoutes.route("/workout/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let member = {
      $set: {
         name:req.body.name,
        date:req.body.date,
        day1:req.body.day1,
        day2:req.body.day2,
        day3:req.body.day3,
        day4:req.body.day4,
        day5:req.body.day5,
        day6:req.body.day6,
        day7:req.body.day7
      },
    };
    db_connect
      .collection("workouts")
      .updateOne(myquery, member, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });

module.exports = recordRoutes;
