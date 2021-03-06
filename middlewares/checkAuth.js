const jwt = require("jsonwebtoken")
require("dotenv").config();

  exports.auth=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.userData=decoded
        next()
    } catch(error){
        return res.status(401).json({
            message:'Forbidden'
        })
    }
    

}


// Verify Token
exports.verifyToken=(req, res, next)=> {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}