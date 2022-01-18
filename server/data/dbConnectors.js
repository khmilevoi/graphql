import mongoose from "mongoose";
import sequelize from "sequelize";
import _ from "lodash";
import casual from "casual";

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/friends", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  contacts: {
    type: Array,
  },
});

export const Friend = mongoose.model("friends", friendSchema);

const sequelizeConnection = new sequelize.Sequelize("database", null, null, {
  dialect: "sqlite",
  storage: "./data/alien.sqlite",
});

export const Alien = sequelizeConnection.define("aliens", {
  firstName: { type: sequelize.STRING },
  lastName: { type: sequelize.STRING },
  planet: { type: sequelize.STRING },
});

sequelizeConnection.sync({ force: true }).then(() => {
  _.times(10, () =>
    Alien.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      planet: casual.word,
    })
  );
});
