const studentModel = require("../models/studentsSchema");

exports.createStudent = async (student) => {
    console.log(student);
    return await studentModel.create(student);
};
