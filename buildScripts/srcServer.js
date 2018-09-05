// var express = require('express');
// var path = require('path');
// var open=require('open');
import express from 'express';
import path from 'path';
import open from 'open';


// var port = 3000;
// var app=express();

const port = 4000;
const app = express();

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL to the DB
var url = 'mongodb://localhost:27017/AngularApi';



MongoClient.connect(url, function (err, client) {
    if (err) throw err;

    var db = client.db('AngularApi'); //

    var cursor = db.collection('users').find();

    cursor.forEach(function (item) {

        console.log(item)

    });

});



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))

})



app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port)
    }


})