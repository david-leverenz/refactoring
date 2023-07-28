import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
        password
      }
      token
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!, $title: String!, $authors:[String]) {
    saveBook(bookId: $bookId, title: $title, authors: $authors) {
      _id
      username
      savedBooks {
        _id
        title
        authors
      }
    }
  }
  `;

  export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!, $title: String!, $authors:[String]) {
    removeBook(bookId: $bookId, title: $title, authors: $authors) {
      _id
      username
      savedBooks {
        _id
        title
        authors
      }
    }
  }
`;
