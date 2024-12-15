const {Sequelize} = require('sequelize');
const config = require('./config/config');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host, dialect: "postgres", port: config.development.port,
});

const documents = require('./models/document')(sequelize);
const publicVisibility = require('./models/publicVisibility')(sequelize);
const userDetail = require('./models/userDetail')(sequelize);
const userLimit = require('./models/userLimit')(sequelize);
const userLogin = require('./models/userLogin')(sequelize);

module.exports = {
    sequelize, models: {
        documents, publicVisibility, userDetail, userLimit, userLogin
    },
};