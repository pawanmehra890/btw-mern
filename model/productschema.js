const express = require("express");
const mongoose = require("mongoose");
const slug = require("slugify");
const productschema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
      slug: "title",
    },
    parentId: {
      type: String,
    },
    images: [{ img: { type: String } }],
    countryOrigin: {
      type: String,
    },
    Color: {
      type: String,
    },
    packagetype: {
      type: String,
    },
    Size: {
      type: String,
    },
    Minimum: {
      type: String,
    },
    short_des: {
      type: String,
    },
    brief_des: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  },
  { timestamps: true }
);
const products = mongoose.model("createproducts", productschema);
module.exports = products;
