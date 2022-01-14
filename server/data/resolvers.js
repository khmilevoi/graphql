import { Alien, Friend } from "./dbConnectors";

export const resolvers = {
  Query: {},
  Mutation: {
    createAlien: (root, { input }) => {
      return new Alien({ ...input }).save();
    },
    createFriend: (root, { input }) => {
      const friend = new Friend(input);

      friend.id = friend._id;

      return new Promise((resolve, reject) =>
        friend.save((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(friend);
          }
        })
      );
    },
  },
};
