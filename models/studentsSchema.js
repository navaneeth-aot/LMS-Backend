const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentSchema = new Schema(
    {
        name: String,
        password : String
    }
)

module.exports = mongoose.model("student",studentSchema);