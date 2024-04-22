module.exports = function(sequelize, DataTypes) {
    let alias = "Albumes";

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
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }

    let config = {
        tableName: "Albumes",
        timestamps: false
    }

    let Albumes = sequelize.define(alias, cols, config);

    Albumes.associate = models => {
        Albumes.hasMany(models.Canciones, {
            foreignKey: 'album_id',
            as: 'canciones'
        });
    };

    return Albumes;
}