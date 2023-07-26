const { Book, User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    saveBook: async (parent, { _id, bookData, token }) => {
      const addBook = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`book data: ${bookData}`]: 1 } },
        { new: true }
      );
      return addBook;
    },

    removeBook: async (parent, { userId, bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $pull: {
              book: {
                _id: bookId,
                title: context.user.title,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
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