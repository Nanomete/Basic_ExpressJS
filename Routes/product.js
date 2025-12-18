const express = require("express");
const router = express.Router();

/**
 * Get -> read
 * Post -> create
 * Put -> update
 * Delete -> delete
 */

const {read, list, create, update, remove} = require("../Controllers/product");

// req คือ request (ข้อมูลที่ client ส่งมา)
// res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
router.get("/product", list);

// :id คือ การกำหนด parameter (ตัวแปรที่ส่งมาใน URL)
router.get("/product/:id", read);

router.post("/product", create);

router.put("/product", update);

router.delete("/product", remove);

module.exports = router;
