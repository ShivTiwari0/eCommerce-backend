const { Schema, model } = require("mongoose");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  id: { type: String, unique: true },
  fullName: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  address: { type: String, default: "" },
  profileProgress: { type: Number, default: 0 }, //0->for new account created 1-> for address entered
  updatedOn: { type: Date },
  createdOn: { type: Date },
});

userSchema.pre("save", function (next) {
  this.id = uuid.v1();
  this.createdOn = new Date();
  this.updatedOn = new Date();

  //Hash the password
  const salt = bcrypt.genSaltSync(10); 
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash; 

  next();
});

userSchema.pre(["update,findOneAndUpdate,updatedOne"], function (next) {
  const update = this.getUpdate();
  delete update._id;
  delete update.id;

  this.updatedOn=new Date();

  next();

});


const UserModel = model('User', userSchema);

module.exports = UserModel;