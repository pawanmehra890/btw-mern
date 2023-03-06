const key = "gsggsggsgsggsggsgsuhscsgsggsdddddgsggsvxhgvshgxchsgvjsgc";

const userSchema=require('../model/AuthSchema')
const jwt=require('jsonwebtoken')


//admin

exports.Signup = async (req, res) => {
  const { firstName, lastName, useremail, password, confirmpassword, role } =
    req.body;

  userSchema
    .findOne({ useremail: req.body.useremail })
    .exec((error, validuser) => {
      if (validuser)
        return res.status(400).json({ message: "Admin  already exists" });
   
      const user = new userSchema({
        firstName,
        lastName,
        useremail,
        password,
        confirmpassword,
        role:'Admin'
      });

      user.save((error, data) => {
        if (data) return res.status(201).json({ data });
        else return res.status(400).json({ message: "Something went wrong" });
      });
    });
};

exports.Signin = async (req, res) => {
  userSchema
    .findOne({ useremail: req.body.useremail })
    .exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (!user) return res.status(400).json({ message: "User not found" });

      try {
        const passwordMatch = await user.authenticate(req.body.password)&&user.role=="Admin";
        if (passwordMatch) {
          const token = jwt.sign({ _id: user._id, role: 'Admin'}, key, {
            expiresIn: "5h",
          });
          const {
            _id,
            firstName,
            lastName,
            useremail,
            password,
            confirmpassword,
          } = user;
          res.status(200).json({
            token,
            user: {
              _id,
              firstName,
              lastName,
              useremail,
              password,
              confirmpassword,
              role:'Admin',
            },
          });
        } else {
          return res.status(400).json({ message: "Incorrect password" });
        }
      } catch (err) {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
};










//middleware req


exports.requiresignin = async(req, res, next) => {
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

//admin mideeleware

exports.Adminrole=(req,res,nxt)=>{
if( req.user &&  req.user.role==='Admin'){

nxt()
}
else{
    res.status(201).json({msg:"Unauthorised"})
}
}
