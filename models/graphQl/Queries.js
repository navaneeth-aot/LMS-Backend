import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import {bookType, studentType} from "./QueryType.js";
import services from '../../services/services.js';


export default {
    students : {
        type: new GraphQLList(studentType),
        resolve : services.getStudent
    },

    studentById : {
        type : studentType,
        args : {
            id : {
                name : "id",
                type : GraphQLID
            },
        },
        resolve : services.getStudentById
    },

    books : {
        type : new GraphQLList(bookType),
        resolve : services.getBook
    },

    booksById : {
        type : bookType,
        args : {
            id : {
                name : 'id',
                type : GraphQLID
            }
        },
        resolve : services.getBookById
    }
}