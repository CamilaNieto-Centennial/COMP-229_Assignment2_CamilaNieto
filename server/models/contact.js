//COMP 229-005 Assignment 2
//Author: Camila Nieto
//ID: 301175110
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    emailAddress: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);