const { Sequelize } = require('sequelize');
const config = require('./config/config');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: config.development.host,
      dialect: "postgres",
      port: config.development.port,
    }
  );

const documents = require('./models/document')(sequelize);
const users = require('./models/users')(sequelize);
const users = require('./models/publicVisibility')(sequelize);
const users = require('./models/userDetail')(sequelize);
const users = require('./models/userLimit')(sequelize);
const users = require('./models/userLogin')(sequelize);

module.exports = {
  sequelize,
  models: {
    documents,
    users,
  },
};