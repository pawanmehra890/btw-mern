const express = require("express");
const Router = express.Router();
const {
  ContactProfineData,
  getContactProfileById,
  CreateContactProfile,
  updateContactProfile,
  deleteContactProfile,
} = require("../controller/AdminController");
const {
  requiresignin,
  AdminMiddleWare,
  // checkRoles,
} = require("../middleware/middleware");
const {checkRoles,
  updateRole,
   

} =require('../controller/Auth')
const {
  Signup,
  Signin,
  Adminrole,
} = require("../controller/adminAuth");

Router.route("/adminsignup").post(Signup);
Router.route("/adminsignin").post(Signin);

Router.post("/profile", requiresignin, Adminrole, (req, res) => {
  res.status(201).json({ msg: "profile" });
});
// Admin panel routes for contact profile
// Router.get("/GetContactProfile",requiresignin,(req, res, next) => {
//   const checkUserRoles = checkRoles('Seller');
//   checkUserRoles(req, res, (err) => {
//     if (err) {
//       res.status(401).json({ message: 'Unauthorized' }); // Send a 401 unauthorized response if the user is not authorized
//     } else {
//       ContactProfineData(req, res); // Call ContactProfineData if the user is authorized
//     }
//   });
// });
Router.get("/GetContactProfile",requiresignin,ContactProfineData)
// Router.get('/GetContactProfile',requiresignin,AdminMiddleWare,ContactProfineData)
Router.get("/GetContactProfilebyId/:id", getContactProfileById);
Router.post("/createContactProfile", CreateContactProfile);
Router.put("/UpdateContactProfile/:id", updateContactProfile);
Router.delete("/deleteContactProfile/:id", deleteContactProfile);
module.exports = Router;




