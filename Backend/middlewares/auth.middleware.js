const usermodel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const userModel = require('../models/user.model');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel=require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token=req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlackedlisted=await blackListTokenModel.findOne({token:token});  //this is for blacklist the those user which are logged in and their id is but when they will logged out then we must delte their id bcz it require sapce in database

    if(isBlackedlisted){
        return res.status(401).json({message:"Unauthorized"});
    }

    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decode._id);

       
        req.user = user;

        return next();

    }catch(err){
        return res.status(401).json({message:"Unauthorized"});
    }
 
};


module.exports.authCaptain = async (req, res, next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlackedlisted=await blackListTokenModel.findOne({token:token});  //this is for blacklist the those user which are logged in and their id is but when they will logged out then we must delte their id bcz it require sapce in database

    if(isBlackedlisted){
        return res.status(401).json({message:"Unauthorized"});
    }

    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        const captain=await userModel.findById(decode._id);

       
        req.captain =captain;

        return next();

    }catch(err){
        return res.status(401).json({message:"Unauthorized"});
    }


}