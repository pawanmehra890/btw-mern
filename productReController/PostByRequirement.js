const PostBySchemaa = require("../model/PostByRequirement");

exports.PostByRequirement = async (req, res) => {
  try {
    const {
      Name,
      porductName,
      quantity,         
      email,
      Requirement_Frequancy,
      purposeOfReq,
      Mobile,
    } = req.body;
    const post = new PostBySchemaa({
      Name,
      porductName,
      quantity,
      email,
      Requirement_Frequancy,
      purposeOfReq,
      Mobile,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
