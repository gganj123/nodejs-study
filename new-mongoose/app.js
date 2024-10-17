const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose-test");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (!validator.isEmail(value)) throw new Error("This is not an email");
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

// const newUser = new User({
//   name: "김철수",
//   email: "김철수@gmail.com",
//   password: "       abcgd",
// });

// newUser.save().then((value) => console.log("value is", value));
User.find({ name: "김철수" })
  .select("name -_id")
  .then((value) => console.log("all data", value));
