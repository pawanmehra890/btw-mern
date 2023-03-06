const express = require("express");
const mongoose = require("mongoose");
const slug = require("slugify");
const CategoryModal = mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
    parentId: {
      type: String,
    },
    image: [
      {
        image: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Category = new mongoose.model("All Category", CategoryModal);

module.exports = Category;
