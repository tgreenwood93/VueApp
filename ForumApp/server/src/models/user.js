module.exports = (sequelize, DataTypes) =>
  sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
    type: DataTypes.STRING
    },
  })
