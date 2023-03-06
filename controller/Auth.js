const key = "gsggsggsgsggsggsgsuhscsgsggsdddddgsggsvxhgvshgxchsgvjsgc";

const userSchema = require("../model/AuthSchema");
const jwt = require("jsonwebtoken");
exports.Signup = async (req, res) => {
  const { firstName, lastName, useremail, password, confirmpassword, role } =
    req.body;

  userSchema
    .findOne({ useremail: req.body.useremail })
    .exec((error, validuser) => {
      if (validuser)
        return res.status(400).json({ message: "User already exists" });
      // if (password !== confirmpassword)
      //   return res.status(400).json({ message: "Passwords do not match" });

      const user = new userSchema({
        firstName,
        lastName,
        useremail,
        password,
        confirmpassword,
        role,
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
        const passwordMatch = await user.authenticate(req.body.password);
        if (passwordMatch) {
          const token = jwt.sign({ _id: user._id, role: user.role }, key, {
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
              role: user.role,
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









exports.updateRole = async (req, res) => {
  const { userId, role } = req.body;
  // userid// //role

  if (!userId || !role) {
    return res.status(400).json({ error: 'Invalid request parameters' });
  }

  // Update the user's role in the database
  const updatedUser = await userSchema.findOneAndUpdate({ _id: userId },{ role: role },{ new: true }
  );
  if (!updatedUser) {
    return res.status(400).json({ error: 'Failed to update user role' });
  }
  // Generate a new token with the updated role
  const newToken = jwt.sign({ user:{ id: updatedUser._id, role: updatedUser.role } }, key, { expiresIn: '1h' });

  return res.status(200).json({ success: true, user: updatedUser, token: newToken });
};



exports.Getalluser=async(req,res)=>{
     try{
   const User̥=await userSchema.find()
   res.status(200).json({User̥})

   console.log(User̥)

   
     }catch(error){
      res.status(201).json({error})
     }
}   


exports.checkRoles = (roles) => (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, key);
    const user = decodedToken.user.role;

    console.log(user)
    if (roles.includes(user)) {
      next(); // Call next() if the user is authorized
    } else {
      next(new Error('Unauthorized')); // Call next() with an error if the user is not authorized
    }
  } catch(error) {
    next();
  }
};

