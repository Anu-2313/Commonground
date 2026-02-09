const { Sequelize } = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/commonground';

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: false
});

const connectDatabase = async () => {
  await sequelize.authenticate();
};

module.exports = {
  sequelize,
  connectDatabase
};
