module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  database: 'sequelize',
  define: {
    timestamps: true,
    underscored: true,
  },
};