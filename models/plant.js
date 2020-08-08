module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define("Plant", {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    notes: DataTypes.STRING,
    inGarden: DataTypes.BOOLEAN,
    waterDays: DataTypes.INTEGER,

    // family: DataTypes.STRING,
    // trefleId: DataTypes.INTEGER,
    // year: DataTypes.INTEGER,
    // observations: DataTypes.TEXT,
    // duration: DataTypes.STRING,
    // color: DataTypes.STRING,
    // texture: DataTypes.STRING,
    // daysToHarvest: DataTypes.INTEGER,
  });
  Plant.associate = (models) => {
    Plant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Plant;
};

//don't need my garden model bc have boolean value & only one garden per user
