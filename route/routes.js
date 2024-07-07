var express = require('express');

var studentController = require('../src/student/studentController');
const router = express.Router();

router.post('/student/login', studentController.loginUserControllerFn);
router.post('/student/create', studentController.createStudentControllerFn);

module.exports = router;
