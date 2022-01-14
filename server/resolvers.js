const friendDB = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email, age, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.age = age;
    this.contacts = contacts;
  }
}

export const resolvers = {
  getFriend: ({ id }) => new Friend(id, friendDB[id]),
  friends: () =>
    Object.values(friendDB).map((friend) => new Friend(friend.id, friend)),
  createFriend: ({ input }) => {
    const id = require("crypto").randomBytes(10).toString("hex");

    return (friendDB[id] = new Friend(id, input));
  },
};
