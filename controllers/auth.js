require('dotenv').config()
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const SECRET = process.env.SECRET;

// Hashing function
const hash = (password) => {
  const levelOne = crypto.createHmac('sha256', process.env.SECRET)
              .update(password)
              .digest('hex')
              .split('')
              .reverse()
              .join('j')
 return crypto.createHmac('sha256', process.env.SECRET)
              .update(levelOne)
              .digest('hex')
              .split('')
              .reverse()
              .join('')
};
module.exports.hash = hash

// Register
const registerService = async (req, res) => {
  const hashedPassword = hash(req.body.password)
  req.body.password = bcrypt.hashSync(hashedPassword, bcrypt.genSaltSync(10))

  try{
    const createdUser = await User.create(req.body)
    const token = jwt.sign({
      username: createdUser.username
    }, SECRET)
    res.status(200).json({ user: createdUser, token })
  }catch(err){
    console.error(err)
    res.status(400).json({ msg: err.message })
  }
};
module.exports.register = registerService;

// LOGIN
const loginService = async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username })
    req.body.password = hash(req.body.password)

    if(bcrypt.compareSync(req.body.password, foundUser.password)){
      const token = jwt.sign({
        username: foundUser.username
      }, SECRET)
      res.status(200).json({ user: foundUser, token })
   } else {
      throw new Error('stay in yo lane that aint your password')
   }
  } catch(err){
    console.error(err)
    res.status(401).json({ msg: err.message })
 }
};
module.exports.login = loginService;
