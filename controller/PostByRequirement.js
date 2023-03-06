const PostByRequirement = require("../model/PostByRequirement");
const bcrypt = require('bcrypt');

// Create a new post by requirement
exports.createPostByRequirement = async (req, res) => {
  try {
    const { Name, productName, quantity, email, Requirement_Frequancy, purposeOfReq, phone } = req.body;
    const hash = await bcrypt.hash(phone, 10);
    const form = new PostByRequirement({
      Name,
      productName,
      quantity,
      email,
      Requirement_Frequancy,
      purposeOfReq,
      phone,
      hash,
      approved: false 
    });
    res.status(201).json({ form });
  }
  catch (error) {
    res.status(500).json({ error });
  }
};





exports.GetForms=async(req,res)=>{
   try{
    const forms=await PostByRequirement.find({approved:true}).exec()
    res.status(200).json({forms})
   }catch(error){
    res.status(201).json({msg:"Internal error"})
   }
}