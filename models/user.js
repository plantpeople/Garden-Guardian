module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    authId: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Plant, {
      onDelete: "cascade",
    });
  };

  return User;
};
