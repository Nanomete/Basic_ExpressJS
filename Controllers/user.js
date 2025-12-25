const User = require('../Models/Users');

exports.register_creat = async (req, res) => {
    try {
            console.log(req.body); // ตรวจสอบข้อมูลที่ส่งมา
            const created = await User(req.body).save(); // บันทึกข้อมูลลงฐานข้อมูล
    
            res.send(created);
    } catch (error) {
            console.log(error);
            res.status(400).send("Error, something went wrong");
    }
} 

exports.register_read = async (req, res) => {
    try {
            const read = await User.find({}).exec(); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล
            
            res.send(read);
        } catch (error) {
            console.log(error);
            res.status(400).send("Error, something went wrong");
        }
} 

exports.register_list = async (req, res) => {
    try {
            // _id : id คือการค้นหาข้อมูลโดยใช้ id ที่ส่งมา
            // _id มาจากฐานข้อมูล MongoDB ที่สร้างให้อัตโนมัติสำหรับแต่ละเอกสาร (document)
            const id = req.params.id
            const list = await User.findOne({_id:id}).exec(); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล
            
            res.send(list);
        } catch (error) {
            console.log(error);
            res.status(400).send("Error, something went wrong");
        }
} 