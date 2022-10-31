import { DataTypes, Sequelize } from "sequelize";
import config from "../../../config/config.js";

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    config.development
  );

  const Opera = sequelize.define(
    "Opera",
    {
        name:{
          type: DataTypes.TEXT,
          validate:{
            notEmpty: true,
          },
        },
        language:{
          type: DataTypes.STRING
        },
        composer:{
          type: DataTypes.STRING
        },
        characters:{
          type: DataTypes.ARRAY(DataTypes.STRING)
        },
        chorus:{
          type: DataTypes.INTEGER
        },
        year:{
          type: DataTypes.INTEGER
        },
        instrumentation:{
          type: DataTypes.ARRAY(DataTypes.STRING)
        },
    }
 )

 export default Opera