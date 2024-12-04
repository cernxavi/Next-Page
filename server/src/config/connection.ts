const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || 'default_db_name',
    process.env.DB_USER || 'default_db_user',
    process.env.DB_PW || 'default_db_pw',
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
}
module.exports = sequelize;