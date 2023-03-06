const key = "gsggsggsgsggsggsgsuhscsgsggsdddddgsggsvxhgvshgxchsgvjsgc";

const userSchema = require("../model/AuthSchema");
const jwt = require("jsonwebtoken");

exports.requiresignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const user = jwt.verify(token, key);
      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
  } else {
    return res.status(400).json({ error: "Not authorized" });
  }
};

// ***************** only admin can create category middleware***************
// exports.userMiddleware = (req, res, next) => {};

// exports.adminMiddleware = (req, res, next) => {
//   if(req.user.role !== 'admin'){
    
//   }
// };
// ***************** only admin can create category middleware***************

exports.checkRoles = (roles) => {
  return (req, res, next) => {
    console.log("req.user:", req.user); // debug statement
    if (req.user && req.user.role && roles.includes(req.user.role)) {
      console.log(req.user);
      next();
    } else {
      console.log("user role is not defne");
      return res.status(401).json({ error: "Unauthorized" });
    }
  };
};

exports.AdminMiddleWare = async (req, res, nxt) => {
  if (req.user.role !== "Admin") {
    res.status(201).json({ msg: "Access denies" });
  } else {
    nxt();
  }
};

// const contactFormFilledOut = (req, res, next) => {
//   const {
//     firstname,
//     lastName,
//     companyname,
//     country,
//     state,
//     city,
//     address,
//     landmark,
//     zipcode,
//     phone,
//     email,
//     Altphone,
//     Altemail,
//     YearofEst,
//     BusinessType,
//     ownershiptype,
//     employeeStrength,
//     annualturnover,
//     facebooklink,
//     instagramlink,
//     linkedinlink,
//     company_des,
//     ifscCode,
//     bankName,
//     AccNumb,
//     accType,
//   } = req.body;

//   if (
//     (firstname && lastName && companyname && country,
//     state &&
//       city &&
//       address &&
//       landmark &&
//       zipcode &&
//       phone &&
//       email &&
//       Altphone &&
//       Altemail &&
//       YearofEst &&
//       BusinessType &&
//       ownershiptype &&
//       employeeStrength &&
//       annualturnover &&
//       facebooklink &&
//       instagramlink &&
//       linkedinlink &&
//       company_des &&
//       ifscCode &&
//       bankName &&
//       AccNumb &&
//       accType)
//   ) {
//     next();
//   } else {
//     res.status(400).json({ error: "Please Fill out the contact form" });
//   }
// };

const generateKey = (req, res, next) => {
  //Generate unique key using a library
  const key = uuid.v4();

  // add the key to the request object

  req.body.key = key;

  next();
};

const submitForm = async (req, res) => {
  const {
    firstname,
    lastName,
    companyname,
    country,
    state,
    city,
    address,
    landmark,
    zipcode,
    phone,
    email,
    Altphone,
    Altemail,
    YearofEst,
    BusinessType,
    ownershiptype,
    employeeStrength,
    annualturnover,
    facebooklink,
    instagramlink,
    linkedinlink,
    company_des,
    ifscCode,
    bankName,
    AccNumb,
    accType,
  } = req.body;

  const data = await contactprofile({
    key: req.body.key,

    firstname,
    lastName,
    companyname,
    country,
    state,
    city,
    address,
    landmark,
    zipcode,
    phone,
    email,
    Altphone,
    Altemail,
    YearofEst,
    BusinessType,
    ownershiptype,
    employeeStrength,
    annualturnover,
    facebooklink,
    instagramlink,
    linkedinlink,
    company_des,
    ifscCode,
    bankName,
    AccNumb,
    accType,
  });

  data.save((error, data) => {
    if (error) return res.status(400).json({ error });
    if (data) {
      res.status(201).json({ data });
    }
  });
};
