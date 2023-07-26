const { Book, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // Use context (Similar to your express session)
      // const params = _id ? { _id } : {};
      return User.find(context.user._id);
    },

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    saveBook: async (parent, { userId, description, bookId, image, link, title }) => {
      if (context.user) {
      const updateUser = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: {savedBooks: {description, bookId, image, link, title }, }},
        { new: true }
      );
      return updateUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    removeBook: async (parent, { bookId }, context) => {
      // if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId }}},
          { new: true }
        );
        return updatedUser;
      // }
      // throw new AuthenticationError('Login required!');
    },

    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;