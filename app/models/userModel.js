const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const userShema = new Schema({
  name: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  state: { type: Boolean, require: true },
  lastLogin: { type: Date },
  passwotdAttempts: { type: Number }
});

mongoose.model("user", userShema);

module.exports = mongoose.model("user");
