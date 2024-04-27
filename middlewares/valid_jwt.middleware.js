const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;


  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ message: "token is required" });


  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.userId = decoded.user_id;
    req.roles = decoded.roles;
    console.log(decoded);
    next();
  });
}; 
module.exports = verifyJWT;
