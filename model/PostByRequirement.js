

const express = require("express")
const mongoose = require("mongoose");

const PostBySchema = mongoose.Schema({
  Name: {
    type: String,
  },
  porductName: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  email: {
    type: String,
  },
  Requirement_Frequancy: {
    type: String,
  },
  purposeOfReq: {
    type: String,
  },
  phone: {
    type: String,
    
  },
  hash:{
    type:String
  },
  approved:{
    type:Boolean
  }
});

const PostByRequirement = mongoose.model("PostByRequirement", PostBySchema);
module.exports = PostByRequirement;
