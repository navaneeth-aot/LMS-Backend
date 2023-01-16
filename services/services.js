import book from "../models/bookSchema.js";
import student from "../models/studentsSchema.js";
import mongoose, { Error } from "mongoose";


 const createStudent =  async (root,{name,Email,password}) => {
    var StudentInput = new student({name:name, Email:Email, password:password});

    try {
        var emailVerify = await student.findOne({Email:Email});
        if(!emailVerify) {
            return StudentInput.save();
        }
        throw new Error.ValidationError;
        
    } catch (error) {
        return error.message;
    }
};

 const getStudent = async () => {
    try {
        return await student.find();
    } catch (error) {
        return error.message;
    }
};

 const getStudentById = async (root,{id}) => {
    try {
        const stud = await student.findById(id);
        
        if(stud) {
             return stud;
        }
        throw new Error.DocumentNotFoundError;

    } catch (error) {
        console.log(error.message);
        return error.message;
    }
 };

const updateStudent = async (root,{id,name,Email,password}) => {
    var update = ({name:name,Email:Email,password:password})

    try {

        const stud = await student.findByIdAndUpdate(id,update,{new:true});

        if(stud) {
            return stud;
        }
        throw new Error.DocumentNotFoundError
        
    } catch (error) {
        return error.message;
    }
    
};

const deleteStudent = async (root,{id}) => {
    try {
        const stud = await student.findByIdAndDelete(id);
        return stud
    } catch (error) {
        return error.message;
    }
};

const createBook =  async (root,{title,author,language,total,remaining}) => {
    var BookInput = new book({
      title: title,
      author: author,
      language: language,
      total: total,
      remaining: remaining
    });

    try {
        var titleVerify = await book.findOne({title:title,author:author,language:language});
        if(!titleVerify || !authorVerify || !languageVerify) {
            return BookInput.save();
        }
        throw new Error.ValidatorError
    } catch (error) {
        return error.message;
    }
};


const getBook = async () => {
    try {
        return await book.find();
    } catch (error) {
        return error.message;
    }
};

const getBookById = async (root,{id}) => {
    try {
        const BookData = await book.findById(id);
        
        if(BookData) {
             return BookData;
        }
        throw new Error.DocumentNotFoundError;

    } catch (error) {
        console.log(error.message)
        return error.message;
    }
 };

const updateBook = async (root,{id,title,author,language,total,remaining}) => {
    var update = {
      title: title,
      author: author,
      language: language,
      total: total,
      remaining: remaining,
    };

    try {
        const BookData = await book.findByIdAndUpdate(id,update,{new : true});

        if(BookData) {
            return BookData;
        }
        throw new Error.DocumentNotFoundError
        
    } catch (error) {
        return error.message;
    }
    
};

const deleteBook = async (root,{id}) => {
    try {
        const Book = await book.findByIdAndDelete(id);
        return Book
    } catch (error) {
        return error.message;
    }
};

export default {
    createStudent : createStudent,
    getStudent : getStudent,
    updateStudent : updateStudent,
    getStudentById : getStudentById,
    deleteStudent : deleteStudent,
    createBook : createBook,
    getBook : getBook,
    updateBook : updateBook,
    getBookById : getBookById,
    deleteBook : deleteBook
};