const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(401).send("No token, authorization denied");

        const decoded = jwt.verify(token, "jwtsecret");
        req.user = decoded.user;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}