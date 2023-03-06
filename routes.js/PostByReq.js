const express = require("express");
const { createPostByRequirement } = require("../controller/PostByRequirement");

const router = express.Router();

router.route("/postbyrequirement").post(createPostByRequirement);

module.exports = router;