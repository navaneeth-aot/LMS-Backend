const studentModel = require("../models/studentsSchema");

exports.createStudent = async (student) => {
    return await studentModel.create(student);
};
