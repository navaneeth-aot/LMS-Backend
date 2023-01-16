import { mongoose } from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema (
    {
        title : String,
        author : String,
        language : String,
        total : Number,
        remaining : Number,
    }
)



let bookModel = mongoose.model('book',bookSchema);

export default bookModel