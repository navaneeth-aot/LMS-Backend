import { mongoose } from "mongoose";
const Schema = mongoose.Schema;


const studentSchema = new Schema(
    {
        name: String,
        Email: String,
        password : String
    }
)


let studentmodel = mongoose.model('student',studentSchema);

export default studentmodel