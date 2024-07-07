var studentModel = require("./studentModel");
var key = "123456789trytryrtyr";
var encrypter = require('simple-encryptor')(key);

module.exports.createStudentDBService = (studentDetails) => {
    return new Promise((resolve, reject) => {
        studentModel.findOne({ email: studentDetails.email }).then(existingStudent => {
            if (existingStudent) {
                // Email already exists
                reject({ status: false, message: "Email already exists" });
            } else {
                var studentModelData = new studentModel({
                    username: studentDetails.username,
                    email: studentDetails.email,
                    password: encrypter.encrypt(studentDetails.password)
                });

                studentModelData.save()
                    .then((result) => {
                        resolve({ status: true, message: "User created successfully" });
                    })
                    .catch((error) => {
                        console.log(error);
                        reject({ status: false, message: "Error creating user" });
                    });
            }
        }).catch(error => {
            console.log(error);
            reject({ status: false, message: "Error checking for existing user" });
        });
    });
};

module.exports.loginuserDBService = async (studentDetails) => {
    try {
        const result = await studentModel.findOne({ email: studentDetails.email });
        console.log(result);
        console.log(result.password);
        if (result !== null) {
            var decrypted = encrypter.decrypt(result.password);
            if (decrypted === studentDetails.password) {
                return { status: true, msg: "Student Validation successfully" };
            } else {
                throw { status: false, msg: "Student Validation failed" };
            }
        } else {
            throw { status: false, msg: "Invalid Student Details" };
        }
    } catch (error) {
        throw { status: false, msg: "Invalid Data" };
    }
};
