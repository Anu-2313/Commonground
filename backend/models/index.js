const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = require('./User')(sequelize, DataTypes);
const Project = require('./Project')(sequelize, DataTypes);
const Offer = require('./Offer')(sequelize, DataTypes);
const Chat = require('./Chat')(sequelize, DataTypes);

const models = {
  User,
  Project,
  Offer,
  Chat
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

const syncDatabase = async () => {
  await sequelize.sync({ alter: true });
};

module.exports = {
  sequelize,
  Sequelize,
  syncDatabase,
  ...models
};
