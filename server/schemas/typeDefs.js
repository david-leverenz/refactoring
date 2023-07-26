const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    savedBooks: [Book]
    }

  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    saveBook(_id: String!, bookData: String!): User
    removeBook(UserId: ID!, bookId: ID!): User
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;