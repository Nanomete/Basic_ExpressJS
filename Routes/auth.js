const express = require("express");
const router = express.Router();
// const { register_creat, register_read, register_list } = require("../Controllers/auth");
const { register, login } = require("../Controllers/auth");

// http://localhost:5000/api/register/

router.post("/register", register);

// http://localhost:5000/api/register/
// router.post("/register", register_creat);
// router.get("/register", register_read);
// router.get("/register/:id", register_list);

router.post("/login", login);

module.exports = router;
