
const studentService = require('./studentService');

async function createStudentControllerFn(req, res) {
    try {
        const status = await studentService.createStudentDBService(req.body);

        if (status) {
            res.send({ "status": true, "message": "user Created Successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    } catch (err) {
        console.log(err);
        res.send({ "status": false, "message": "Please use another email" });
    }
}

async function loginUserControllerFn(req, res) {
    try {
        const result = await studentService.loginuserDBService(req.body);

        if (result && result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (err) {
        console.log(err);
        res.send({ "status": false, "message": "Error validating user" });
    }
}

module.exports = { createStudentControllerFn, loginUserControllerFn };