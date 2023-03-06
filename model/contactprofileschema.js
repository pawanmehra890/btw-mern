const express = require("express");
const mongoose = require("mongoose");

const contactschme = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"UserAuth",
    required: true,
  },
    
  firstname: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  companyname: {
    type: String,
    // required: true,
  },
  country: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  landmark: {
    type: String,
    // required: true,
  },
  zipcode: {
    type: String,
    // required: true,
  },
  phone: {
    type: Number,
    // required: true,
    // unique: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
  },
  Altphone: {
    type: Number,
    // unique: true,
  },
  Altemail: {
    type: String,
    // unique: true,
  },
  YearofEst: {
    type: Number,
  },
  BusinessType: {
    type: String,
  },
  ownershiptype: {
    type: String,
  },
  employeeStrength: {
    type: String,
  },
  annualturnover: {
    type: String,
  },
  facebooklink: {
    type: String,
    // unique: true,
  },
  instagramlink: {
    type: String,
    // unique: true,
  },
  linkedinlink: {
    type: String,
    // unique: true,
  },
  company_des: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  bankName: {
    type: String,
  },
  AccNumb: {
    type: String,
    // unique: true,
  },
  accType: {
    type: String,
  },
  image: {
    type: String,
  },
  accountManager:{
    type: String,
  }
});

const contactprofile = mongoose.model("contactprofile", contactschme);

module.exports = contactprofile;
