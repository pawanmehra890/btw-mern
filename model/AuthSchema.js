const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  useremail: {
    type: String,
  },
  password: {
    type: String,
  },
 
  confirmpassword: {
    type: String,
  },
  // contactprofile: {
  //   firstname: {
  //     type: String,
  //     required: true
  //   }
  // },
  role: {
    type: String,
    enum: ["Admin", "Buyer", "Seller"],
  },
});
// userSchema.virtual('password').set(function(password){
// this.hash_password=bcrypt.hashSync(password,10)
// })

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10, (error, hash) => {
    if (error) {
      return next(error);
    }
    this.password = hash;
    next();
  });
});

userSchema.methods.authenticate = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("UserAuth", userSchema);
