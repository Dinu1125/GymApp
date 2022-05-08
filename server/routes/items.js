
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId

const ItemsModel = require("../models/items");

// This section will help you get a list of all the records.
recordRoutes.route("/items/all").get(function (req, res) {
    let db_connect = dbo.getDb("Staff");
    db_connect
      .collection("items")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  // This section will help you create a new record.
recordRoutes.route("/items/add").post(function (req, response) {
    let db_connect = dbo.getDb();

    const member = new ItemsModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:"",
    });
    
    db_connect.collection("items").insertOne(member, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

  // This section will help you delete a record
  recordRoutes.route("/items/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("items").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });

  // This section will help you get a single record by id
recordRoutes.route("/items/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("items")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });

  // This section will help you update a record by id.
recordRoutes.route("/items/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let member = {
      $set: {
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:"",
      },
    };
    db_connect
      .collection("items")
      .updateOne(myquery, member, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });

module.exports = recordRoutes;
