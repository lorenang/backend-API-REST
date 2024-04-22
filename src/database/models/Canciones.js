module.exports = function(sequelize, DataTypes) {
    let alias = "Canciones";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        titulo: {
            type:DataTypes.STRING,
            allowNull: true
        },
        duracion: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        genero_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        artista_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName: "Canciones",
        timestamps: false
    }
    
    let Canciones = sequelize.define(alias, cols, config);
    
    Canciones.associateModels  = models => {
        Canciones.belongsTo(models.Generos, {
            foreignKey: 'genero_id',
            as: 'genero'
        });
        Canciones.belongsTo(models.Albumes, {
            foreignKey: 'album_id',
            as: 'album'
        });
        Canciones.belongsTo(models.Artista, {
            foreignKey: 'artista_id',
            as: 'artista'
        });
    };

    return Canciones;
}