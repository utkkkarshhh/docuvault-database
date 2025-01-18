const { Sequelize } = require("sequelize");
const config = require("./config/config");
const environment = process.env.NODE_ENV || "development";
const envConfig = config[environment];

const sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    {
      host: envConfig.host,
      dialect: envConfig.dialect,
      port: envConfig.port,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
  );

const documents = require("./models/document")(sequelize);
const publicVisibility = require("./models/publicVisibility")(sequelize);
const userDetail = require("./models/userDetail")(sequelize);
const userLimit = require("./models/userLimit")(sequelize);
const userLogin = require("./models/userLogin")(sequelize);

module.exports = {
  sequelize,
  models: {
    documents,
    publicVisibility,
    userDetail,
    userLimit,
    userLogin,
  },
};
