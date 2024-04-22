module.exports = function(sequelize, DataTypes) {
    let alias = "Generos";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type:DataTypes.STRING,
            allowNull: true
        },

    }

    let config = {
        tableName: "Generos",
        timestamps: false
    }

    let Generos = sequelize.define(alias, cols, config);

    Generos.associate = models => {
        Generos.hasMany(models.Canciones, {
            foreignKey: 'genero_id',
            as: 'canciones'
        });
    };

    return Generos;
}