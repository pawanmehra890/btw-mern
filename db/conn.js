const mongoose = require("mongoose");
const products = require("../model/productschema");

const db =
  "mongodb+srv://pawanmhr890:nature123@cluster0.j0ddn4z.mongodb.net/loginform?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((ee) => {
    console.log(ee);
  });
//   products.collection.dropIndex("parentId_1", function(err, result) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Index dropped successfully");
//     }
// });
