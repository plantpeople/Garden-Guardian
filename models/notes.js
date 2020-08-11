const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define("Note", {
        note: DataTypes.STRING
    }) ;
    Note.associate = (models) => {
        Note.belongsTo(models.Plant, {
            foreignKey: {
                allowNull: true,
            },
        });
    };
    return Note
}