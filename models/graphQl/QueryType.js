import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";


const studentType = new GraphQLObjectType({
  name: "student",
  description: "student object",
  fields: () => ({
    id : { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    Email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  }),
}
);

const bookType = new GraphQLObjectType({
  name: "book",
  description: "book object",
  fields: () => ({
    id : { type: new GraphQLNonNull(GraphQLID) },
    title : { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
    language: { type: new GraphQLNonNull(GraphQLString) },
    total: { type: new GraphQLNonNull(GraphQLInt) },
    remaining: { type: new GraphQLNonNull(GraphQLInt) },
  }),
})

export  {
  studentType,
  bookType
}