import { Sequelize } from "sequelize";
import config from "../config/config.js"
import Opera from "./opera.model.js"

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    config.development
  );

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.opera = Opera;

// test the connection to the database
try {
    await sequelize.authenticate();
    console.log("sequelize connection successful");
  } catch (err) {
    console.error("unable to connect to database");
}

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

export { db };
