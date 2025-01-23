const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3,'first name be at least 3 charcharter long']
        },
        lastname: {
            type: String,
            minlength: [3,'last name be at least 3 charcharter long']

        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color must be at least 3 charcharter long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate must be at least 3 charcharter long']
        },
        // model:{
        //     type:String,
        //     required:true,
        //     minlength:[3,'model must be at least 3 charcharter long']
        // },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','auto'],
            required:true
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lon:{
            type:Number,
        }
    }
});


    captainSchema.methods.generateAuthToken = function () {
        const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return token;
    }

    captainSchema.methods.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    }

    captainSchema.statics.hashPassword = async function (password) {
        return await bcrypt.hash(password, 10);
    }

    
const captainModel = mongoose.model('Captain', captainSchema);


module.exports = captainModel;
