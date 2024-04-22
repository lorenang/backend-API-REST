module.exports = function(sequelize, DataTypes) {
    let alias = "Artistas";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type:DataTypes.STRING,
            allowNull: true
        },
        apellido: {
            type:DataTypes.STRING,
            allowNull: true
        },
    }

    let config = {
        tableName: "Artistas",
        timestamps: false
    }

    let Artistas = sequelize.define(alias, cols, config);

    Artistas.associate = models => {
        Artistas.hasMany(models.Canciones, {
            foreignKey: 'artista_id',
            as: 'artistas'
        });
    };

    return Artistas;
}