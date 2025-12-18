exports.read = async (req, res) => {
    res.send("Hello Controller get")
}

/**
 * จัดการ error ด้วย try catch
 * @param {*} req 
 * @param {*} res 
 */
exports.list = async (req, res) => {
    try {
        res.send("Hello List")
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}

/**
 * Get method จัดการ error
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    try {
        res.send("Hello create")
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}

/**
 * put method จัดการ error
 * @param {*} req 
 * @param {*} res 
 */
exports.update = async (req, res) => {
    try {
        res.send("Hello update")
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}

/**
 * delete method จัดการ error
 * @param {*} req 
 * @param {*} res 
 */
exports.remove = async (req, res) => {
    try {
        res.send("Hello delete")
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}