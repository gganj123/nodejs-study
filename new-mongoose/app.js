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
        if (!value.includes("@")) throw new Error("This is not an Email");
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "dony",
  email: "zzznj123@gmail.com",
  password: "12345",
});

newUser.save().then((value) => console.log("value is", value));
