import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import Mutations from "./models/graphQl/Mutations.js";
import Queries from "./models/graphQl/Queries.js";
import cors from 'cors'

const app = express();
const PORT = 8080;

app.use(cors())
let RootQuery = new GraphQLObjectType({
    name:'Query',
    description:'Root Query',
    fields: () => ({
        students : Queries.students,
        studentById : Queries.studentById,
        books : Queries.books,
        booksById : Queries.booksById
    })

})

let RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Realize Root Mutations',
    fields: () => ({
      addStudent: Mutations.addStudent,
      updateStudent: Mutations.updateStudent,
      deleteStudent: Mutations.deleteStudent,
      addBook: Mutations.addBook,
      updateBook: Mutations.updateBook,
      deleteBook: Mutations.deleteBook
    })
  })

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})
  
//middleware
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql: true
})
);
// app.use(express.urlencoded());


mongoose.connect(
    "mongodb+srv://navaneeth:K1CNUwhWPyoGUIYO@cluster0.qcg2cmj.mongodb.net/Library-Management?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});



export default app;