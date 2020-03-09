
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const  bcrypt = require('bcryptjs');

const userShema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  state: { type: Boolean, required: true },
  lastLogin: { type: Date },
  passwotdAttempts: { type: Number }
});

userShema.methods.toJSON = function () {//trae los objetos de mongoose y los convierte a .json
    let user = this.toObject();
        delete user.password;
        return user;
};

//función para comparar el password que toma y el encriptado
userShema.methods.comparePassword = async function(password){
    let result = await bcrypt.compare(password, this.password);
    return result;
};

//dispara un trigger antes de guardar 
userShema.pre('save', async function(next){
    const user = this;
    if (!user.isModified('password')) {
        return next(); 
    } 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt); //Cifrar el password
    user.password = hashedPassword;
    return next();

});
mongoose.model("user", userShema);

module.exports = mongoose.model("user");
