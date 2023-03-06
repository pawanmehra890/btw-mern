const contactprofileschema = require("../model/contactprofileschema");
const slugify = require("slugify");

// fetch data of contact profile to admin panel
exports.ContactProfineData = async (req, res) => {
  try {
    const FetchData = await contactprofileschema.find();
    if (FetchData) {
      res.status(201).json({ FetchData });
    } else {
      res.status(400).json({ msg: "Not found" });
    }
  } catch (error) {
    res.status(404).json({ error });
  }
};

// feth data of contact profile by id to admin panel
exports.getContactProfileById = async (req, res) => {
  try {
    const contactProfile = await contactprofileschema.findById(req.params.id);
    if (contactProfile) {
      res.status(200).json({contactProfile});
    } else {
      res.status(404).json({ msg: "Contact profile not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create data of contact profile to amin pane  l
exports.CreateContactProfile = async (req, res) => {

  const { firstname, lastName, companyname } = req.body;

  try {
    const newProfile = new contactprofileschema({
      firstname: firstname,
      slug: slugify(firstname),
      lastName,
      companyname,
    });
    const createdProfile = await newProfile.save();
    res.status(201).json({ data: createdProfile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update contact profile
exports.updateContactProfile = async (req, res) => {
  try {
 const {id}=req.params.id

    const updateProfile = await contactprofileschema.findByIdAndUpdate(id,req.body,{ new: true}
    );

    if (updateProfile) {
      res.status(200).json({
        data: updateProfile,
      });
    } else {
      res.status(404).json({ msg: "not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete contact profile

exports.deleteContactProfile = async (req, res) => {
  try {
 const {id}=req.params.id

    const deleteContactProfile = await contactprofileschema.findByIdAndDelete(sid  );
    if (deleteContactProfile) {
      res
        .status(200)
        .json({ data: deleteContactProfile, msg: "profile deleted" });
    } else {
      res.status(404).json({ msg: " not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
