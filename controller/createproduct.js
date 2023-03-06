const slugify = require("slugify");
const products = require("../model/productschema");

//createproductsbysellerpanel
exports.createsingleproducts = async (req, res) => {
  const {
    name,
    countryOrigin,
    packagetype,
    category,
    Size,
    Minimum,
    Color,
    short_des,
    brief_des,
    price,
    images
  } = req.body;

  const Allproducts = new products({
    name,
    slug: slugify(name),
    short_des,
    brief_des,
    price,
    category,
    countryOrigin,
    packagetype,
    Size,
    Minimum,
    Color,
  });

  // Check if there are any files uploaded

  Allproducts.save((error, Allproducts) => {
    if (error) return res.status(400).json({ error });
    if (Allproducts) {
      res.status(201).json(Allproducts);
    }
  });
};


//update products from here???

exports.readUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await products.findById(id);
    res.status(200).send({
      status: 200,
      user,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    short_des,
    price,
    countryOrigin,
    Minimum,
    Size,
    packagetype,
    Color,
  } = req.body;
  try {
    const user = await products.findByIdAndUpdate(
      id,
      {
        name,
        short_des,
        price,
        countryOrigin,
        Minimum,
        Size,
        packagetype,
        Color,
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (!user) {
      return res.status(500).send({
        status: 500,
        message: `user not found with id ${id}`,
      });
    }
    res.status(200).send({
      status: 200,
      user,
      message: "Update successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const deletbyid = await products.findByIdAndDelete(req.params.id);
    if (deletbyid) {
      res.status(201).json({ msg: "Product have been deleted" });
    } else {
      res.status(200).json({ msg: "Failed" });
    }
  } catch (error) {
    res.status(200).json({ msg: error });
  }
};
