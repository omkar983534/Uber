const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
        type:String,
        required:true,
        minlength  :[3, 'first name must be at least 3 characters'],
        },
    
    lastname:{
        type:String,
   
        minlength  :[3, 'last name must be at least 3 characters'],
    }

},
email:{
    type:String,
    required:true,
    unique:true,
    minlength  :[5, 'email must be at least 6 characters'],
},
password:{  
    type:String,
    required :true,
    select:false,    ///this line mean that if we are doing any query on user password will not come    
},

socketId:{  
    typeq:String,   
},

})


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET);
    return token;
}
 userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);   
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;