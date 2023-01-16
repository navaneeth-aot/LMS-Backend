import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import {studentType,bookType} from './QueryType.js';
import services from '../../services/services.js';

export default { 
    addStudent:{
        type : studentType,
        args:{
            name:{
                name:'name',
                type: new GraphQLNonNull(GraphQLString)
            },
            Email:{
                name:'Email',
                type: new GraphQLNonNull(GraphQLString)
            },
            password:{
                name:'password',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: services.createStudent
    },
    updateStudent: {
        type : studentType,
        args : {
            id : {
                name : "id",
                type : GraphQLID
            },
            name:{
                name: 'name',
                type: GraphQLString
            },
            Email:{
                name: 'Email',
                type: GraphQLString
            },
            password:{
                name: 'password',
                type: GraphQLString
            }
        },
        resolve : services.updateStudent
    },
    deleteStudent : {
        type : studentType,
        args : {
            id : {
                name : 'id',
                type : GraphQLID
            }
        },
        resolve : services.deleteStudent
    },
    addBook : {
        type : bookType,
        args : {
            title : {
                name : 'BookTitle',
                type : GraphQLString
            },
            author : {
                name : 'author',
                type : GraphQLString
            },
            language : {
                name : 'language',
                type : GraphQLString
            },
            total : {
                name : 'total',
                type : GraphQLInt
            },
            remaining : {
                name : 'remaining',
                type : GraphQLInt
            },
        },
        resolve : services.createBook 
    },
    updateBook : {
        type : bookType,
        args : {
            id : {
                name : 'id',
                type : GraphQLID
            },
            author : {
                name : 'author',
                type : GraphQLString
            },
            title : {
                name : 'title',
                type : GraphQLString
            },
            language : {
                name : 'language',
                type : GraphQLString  
            },
            total : {
                name : 'total',
                type : GraphQLInt
            },
            remaining: {
                name : 'remaining',
                type : GraphQLInt
            },

        },
        resolve : services.updateBook
    },
    deleteBook : {
        type : bookType,
        args : {
            id: {
                name : 'id',
                type : GraphQLID
            }
        },
        resolve : services.deleteBook
    }
    
}
