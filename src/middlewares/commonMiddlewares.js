const jwt = require('jsonwebtoken')

let auth2 = function(req, res, next){
let token = req.headers['x-auth-tokan']
  if (!token) {
    res.send({ status: false, msg: "token must be present" })
  }
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key")
  if (!decodedToken) {
    res.send({ status: false, msg: "tokan is invalid" })
  }  
  req.pass = decodedToken
  next()
}

module.exports.auth2 = auth2;
