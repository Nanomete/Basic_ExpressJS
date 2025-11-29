const express = require("express");
const router = express.Router();

/**
 * Get -> read
 * Post -> create
 * Put -> update
 * Delete -> delete
 */

router.get("/product", (req, res) => {
  // req คือ request (ข้อมูลที่ client ส่งมา)
  // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
  res.send("Hello get endpoint >> product");
});

// :id คือ การกำหนด parameter (ตัวแปรที่ส่งมาใน URL)
router.get("/product/:id", (req, res) => {
  // req คือ request (ข้อมูลที่ client ส่งมา)
  // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
  res.send("Hello 1 product");
});

router.post("/product", (req, res) => {
  // req คือ request (ข้อมูลที่ client ส่งมา)
  // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
  res.send("Hello post endpoint >> product");
});

router.put("/product", (req, res) => {
    // req คือ request (ข้อมูลที่ client ส่งมา)
    // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
    res.json({
        name: "put method",
        message: "Hello put endpoint >> product"
    }); // ส่งข้อมูลแบบ JSON
})

router.delete("/product", (req, res) => {
    // req คือ request (ข้อมูลที่ client ส่งมา)
    // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
    res.json({
        name: "delete method",
        message: "Hello delete endpoint >> product"
    }); // ส่งข้อมูลแบบ JSON
})

module.exports = router;
