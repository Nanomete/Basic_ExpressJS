const express = require("express");
const router = express.Router();

// http://localhost:5000/api/register/
router.post("/register", (req, res) => {
  // req คือ request (ข้อมูลที่ client ส่งมา)
  // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
  res.send("Hello endpoint >> auth");
});

router.post("/login", (req, res)=>{
  res.send('Hello login')
})

module.exports = router;
