module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    sub: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Plant, {
      onDelete: "cascade",
    });
  };

  return User;
};
