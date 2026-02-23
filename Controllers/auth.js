const User = require("../Models/Users");
const bcrypt = require("bcryptjs");


exports.register = async (req, res) => {
  try {
    // 1. checkUser
    console.log(req.body); // ตรวจสอบข้อมูลที่ส่งมา
    const {name, password} = req.body
    var user = await User.findOne({ name })
    console.log(user);

    if (user) {
        return res.send("User already exists").status(400);
    }

    // 2. encrypt password
    const salt = await bcrypt.genSalt(10); //  salt เก็บข้อมูลที่จะแปลง password ให้เป็นแบบเข้ารหัส (hash) โดยใช้ bcrypt.genSalt() ซึ่งจะสร้าง salt ใหม่ที่มีความยาว 10 ตัวอักษร
    user = new User({
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
    res.send("Hello login Controller");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

// exports.register_creat = async (req, res) => {
//     try {
//             console.log(req.body); // ตรวจสอบข้อมูลที่ส่งมา
//             const created = await User(req.body).save(); // บันทึกข้อมูลลงฐานข้อมูล

//             res.send(created);
//     } catch (error) {
//             console.log(error);
//             res.status(400).send("Error, something went wrong");
//     }
// }

// exports.register_read = async (req, res) => {
//     try {
//             const read = await User.find({}).exec(); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล

//             res.send(read);
//         } catch (error) {
//             console.log(error);
//             res.status(400).send("Error, something went wrong");
//         }
// }

// exports.register_list = async (req, res) => {
//     try {
//             // _id : id คือการค้นหาข้อมูลโดยใช้ id ที่ส่งมา
//             // _id มาจากฐานข้อมูล MongoDB ที่สร้างให้อัตโนมัติสำหรับแต่ละเอกสาร (document)
//             const id = req.params.id
//             const list = await User.findOne({_id:id}).exec(); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล

//             res.send(list);
//         } catch (error) {
//             console.log(error);
//             res.status(400).send("Error, something went wrong");
//         }
// }
