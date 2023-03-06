const express = require("express");
const {
  createcategory,
  getallproducts,
  getproductsbysller,
  getsingleproduct,
  Contatctprofile,
  GetUserbyLogin,
  getCategories,
  updatedata,
  SubmitForm,
  SetMiddlewareSubmission,
  updateCategory,
  GetuserFormDetail,
} = require("../controller/productcontroller");
const {
  createsingleproducts,
  readUserById,
  updateUser,
  deleteuser,
} = require("../controller/createproduct");
const {
  requiresignin,
  checkRoles,
  checkBuyerRole,
} = require("../middleware/middleware");
const {
  GetForms,
  createPostByRequirement,
} = require("../controller/PostByRequirement");
//user routes
const {
  Signup,
  Signin,
  updateRole,
  Getalluser,
} = require("../controller/Auth");

const Router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
const PostByRequirement = require("../model/PostByRequirement");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({
  storage,
  limits: {
    // fileSize: 10 * 1024 * 1024
    fileSize: 50 * 1024 * 1024,
  },
});

//****************************************** */
Router.route("/createcategory").post(createcategory);
Router.route("/getcategory").get(getCategories);
Router.route("/updatecategory").get(updateCategory);
//****************************************** */

Router.route("/createsingleproducts").post(
  upload.single("image"),
  createsingleproducts
);

Router.route("/getallproducts").get(getallproducts);
// Router.route('/getallproducts').get(getproductsbysller)
Router.route("/getsingleproduct").get(getsingleproduct);
// Router.route('/getsingleproduct').get(requiresignin,checkRoles("Buyer"),getsingleproduct)

//contacctprofile routes
Router.route("/Contatctprofile").post(
  requiresignin,
  SetMiddlewareSubmission,
  // checkRoles("Seller"),s
  upload.array("image"),
  Contatctprofile
);
Router.route("/updateContatctprofile").post(
  requiresignin,
  // checkRoles("Seller"),s
  upload.array("image")
  // updatedata
);

//get prodducts through id
Router.route("/readUserById/:id").get(readUserById);
Router.route("/updateUser/:id").put(updateUser);

Router.route("/deleteuser/:id").delete(
  requiresignin,
  checkRoles(""),
  deleteuser
);

Router.route("/signup").post(Signup);
Router.route("/signin").post(Signin);
Router.route("/Getalluser").get(Getalluser);

Router.route("/updateRole").put(updateRole);
Router.route("/GetUserbyLogin").get(requiresignin, GetUserbyLogin);
Router.route("/SubmitForm").post(requiresignin, SubmitForm);

Router.route("/GetuserFormDetail").get(requiresignin, GetuserFormDetail);
Router.route("/GetForms").get(GetForms);
Router.route("/createPostByRequirement").post(createPostByRequirement);
//admin routes
module.exports = Router;
