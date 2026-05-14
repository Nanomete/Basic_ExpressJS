const Users = require("../Models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.register = async (req, res) => {
  try {
    // 1. checkUser
    console.log(req.body); // ตรวจสอบข้อมูลที่ส่งมา
    const {name, password} = req.body
    var user = await Users.findOne({ name })
    console.log(user);

    if (user) {
        return res.send("User already exists").status(400);
    }

    // 2. encrypt password
    const salt = await bcrypt.genSalt(10); //  salt เก็บข้อมูลที่จะแปลง password ให้เป็นแบบเข้ารหัส (hash) โดยใช้ bcrypt.genSalt() ซึ่งจะสร้าง salt ใหม่ที่มีความยาว 10 ตัวอักษร
    user = new Users({
        name,
        password
    })

    user.password = await bcrypt.hash(password, salt); // แปลง password เป็นค่าเข้ารหัส (hash) จาก salt ที่สร้างขึ้นก่อนหน้านี้
    console.log(user);

    // 3. save to database
    await user.save();
    res.send("Register successfully");

} catch (error) {
    console.log(error);
    res.status(500).sned("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    // 1. checkUser
    const {name, password} = req.body
    var user = await Users.findOneAndUpdate({name}, {new: true})

    if (!user) return res.send("User not found").status(400);

    // 2. check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.send("Invalid password").status(400);

    // 3. payload
    var payload = {
        user: {
            name: user.name,
        }
    }

    // 4. Generate token
    jwt.sign(payload, 'jwtsecret', {expiresIn: 360000}, (err, token) => {
        if (err) throw err;
        res.json({token, payload});
    })
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};