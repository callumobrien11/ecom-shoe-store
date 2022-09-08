const User = require('../../models/user');
const jwt = require("jsonwebtoken"); // npm i jsonwebtoken
const bcrypt = require('bcrypt');// npm i bcrypt

const SALT_ROUNDS = 6

module.exports = {
    signup,
    login
}

async function signup(req, res) {
  try {
    // NEVER store plaintext password
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    console.log(hashedPassword) 
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(user)

    // creating a jwt:
    // the first parameter specifies what we want to put into the token (in this case, our user document)
    // the second parameter is a "secret" code. This lets our server verify if an incoming jwt is legit or not.
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token); // send it to the frontend
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
    // try {
      console.log('1')
      const user = await User.findOne({ email: req.body.email });
      console.log('2')
      // check password. if it's bad throw an error.
      console.log("user pw", user.password)
      console.log("req.body.password", req.body.password)
      if ((await bcrypt.compare(user.password, req.body.password))) throw new Error();
      console.log('3')
  
      // if we got to this line, password is ok. give user a new token.
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      console.log('4')
      res.status(200).json(token)
    // } catch {
    //   res.status(400).json('Bad Credentials');
    // }
  }