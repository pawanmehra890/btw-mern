const categorySchema = require("../model/category");
const Apifeature = require("../utils/Apifeature");
const shortid = require("shortid");
const slugify = require("slugify");
const userSchema = require("../model/AuthSchema");
const contactprofile = require("../model/contactprofileschema");
const allprodcusts = require("../model/productschema");
const { findById } = require("../model/AuthSchema");
const { getContactProfileById } = require("./AdminController");
const formdata = require("../model/FormMiddle");
const { body, validationResult } = require("express-validator");

//seller pannel

// *****************************************************************
function addCategories(categoriess, parentId = null) {
  const categoryList = [];
  let categorryy;
  if (parentId == null) {
    categorryy = categoriess.filter((cat) => cat.parentId == undefined);
  } else {
    categorryy = categoriess.filter((cat) => cat.parentId == parentId);
  }
  for (let cate of categorryy) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      children: addCategories(categoriess, cate._id),
    });
  }
  return categoryList;
}

exports.createcategory = async (req, res, next) => {
  const createobject = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    createobject.parentId = req.body.parentId;
  } else {
    createobject.parentId = null;
  }

  
  let image = [];
  if (req.files && req.files.length > 0) {
    image = req.files.map((file) => {
      return { image: file.filename };
    });
    createobject.image = image;
  }

  // check if a category with the same parentId already exists
  const existingSlug = await categorySchema.findOne({
    slug: createobject.slug,
  });
  if (existingSlug) {
    return res
      .status(400)
      .json({ error: "A category with the same slug already exists" });
  }
  const cat = new categorySchema(createobject);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    else if (category) {
      return res.status(201).json({ category });
    }
  });
};

// for gettingg particuler category
exports.getCategories = async (req, res) => {
  try {
    const categories = await categorySchema.find({});
    const categoryList = addCategories(categories);
    res.status(200).json({ categoryList });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// **Update category**
exports.updateCategory = async (req, res) => {
  const { name, parentId } = req.body;
  const { categoryId } = req.params;

  try {
    const updatedCategory = await categorySchema.findByIdAndUpdate(
      categoryId,
      { name, parentId },
      { new: true }
    );

    if (!updatedCategory) {
      return res
        .status(400)
        .json({ error: "Could not update category. Please try again." });
    }

    return res.status(200).json({ category: updatedCategory });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// ****************Validation*****************************
exports.createcategory = async (req, res, next) => {
  await body("name").notEmpty().withMessage("Name is required").run(req);
  await body("name")
    .custom(async (value) => {
      const existingCategory = await categorySchema.findOne({ name: value });
      if (existingCategory) {
        throw new Error("Category name already exists");
      }
    })
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const createobject = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    createobject.parentId = req.body.parentId;
  } else {
    createobject.parentId = null;
  }
  let image = [];
  image = req.files
    ? req.files.map((file) => {
        return { image: file.filename };
      })
    : [];
  createobject.image = req.files
    ? req.files.map((file) => {
        return { image: file.filename };
      })
    : [];
  // check if a category with the same parentId already exists
  const existingSlug = await categorySchema.findOne({
    slug: createobject.slug,
  });
  if (existingSlug) {
    return res
      .status(400)
      .json({ error: "A category with the same slug already exists" });
  }
  const cat = new categorySchema(createobject);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    else if (category) {
      return res.status(201).json({ category });
    }
  });
};

// *******************************************************************
//get all products

exports.getallproducts = async (req, res) => {
  try {
    const Allproducts = await allprodcusts.find();

    if (!Allproducts) {
      res.status(201);
    } else {
      res.status(201).json({
        Allproducts,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getsingleproduct = async (req, res) => {
  try {
    const singleproduct = await productSchema.find();

    if (!singleproduct) {
      res.status(201);
    } else {
      res.status(201).json({
        singleproduct,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//BusinessProfile start from here

//SellerDocument start from here

//sellerBank details start from here

// exports.updateproducts = async (req, res) => {

//   try{
//     let productsid = await productSchema.findById(req.params.id);
//     if (!productsid) {
//       res.status({
//         success: false,
//       });
//     }
//     productsid = await productSchema.findByIdAndUpdate(req.params.id, req.body);
//     res.status(201).json({
//       productsid,
//       success: true,
//     });
//   }catch(err){
//     res.status(201).json({err})
//   }

// };

//contractprofile start from here

exports.Contatctprofile = async (req, res) => {

  const userId = req.user._id;
  try {
    const user = await userSchema.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const {
      firstname,
      image,
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

    const updatedata = {
      firstname,
      image,
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
      userId,
      accType, };

    const data = await contactprofile.findOneAndUpdate(
{ userId: userId }, updatedata,
      { new: true, upsert: true }
    );

    data.save();
    res
      .status(201)
      .json({ message: "Contact profile updated successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// /update contact prfoiel dattataa
exports.GetUserbyLogin = async (req, res) => {
  const userId = req.user._id;
  if (!userId) {
    res.status(401).json({ login: "please login" });
  } else {
    try {
      const data = await contactprofile.findOne({ userId: userId });
      if (data) {
        res.status(200).json({ data });
      } else {
        res.status(404).json({ msg: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

//two ways to handle the formdata middleware

//middleware here seller form middleware



exports.SetMiddlewareSubmission = async (req, res, nxt) => {
  const userId = req.user._id;
  try {
    const user = await formdata.findOne({ userId }).exec();
    if (user) {
      nxt();
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};









exports.SubmitForm = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await userSchema.findById(userId);
    if (!user) {
      res.status(404).json({ msg: "User not found" });
    } else {
      const { name, gstnumb, email } = req.body;

      const data = new formdata({ name, gstnumb, email, userId });
      await data.save();

      res.status(201).json({ success: true ,data});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.GetuserFormDetail = async (req, res) => {
  const userId = req.user._id;
  if (!userId) {
    res.status(401).json({ login: "please login" });
  } else {
    try {
      const data = await formdata.findOne({ userINFO: userId });
      if (data) {
        res.status(200).json({ data });
      } else {
        res.status(404).json({ msg: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};


