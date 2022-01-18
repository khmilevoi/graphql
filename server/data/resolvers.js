import { Alien, Friend } from "./dbConnectors";

export const resolvers = {
  Query: {
    getAlien: (root, { id }) => {
      return Alien.findOne({ where: { id: id } });
    },
  },
  Mutation: {
    createAlien: (root, { input }) => {
      return Alien.create({ ...input, id: Date.now() });
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
    updateFriend: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Friend.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, doc) => {
            if (err) {
              reject(err);
            } else {
              resolve(doc);
            }
          }
        );
      });
    },
    deleteFriend: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Friend.findByIdAndDelete(id, {}, (err, doc) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        });
      });
    },
  },
};
