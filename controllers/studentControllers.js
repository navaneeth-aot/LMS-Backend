const studentServices = require("../services/services");

exports.createStudent = async (req,res) => {
    try {
        const student = await studentServices.createStudent(req.body);
        console.log(student)
    }
    catch(err) {
        console.log(err.message)    
    }
}   