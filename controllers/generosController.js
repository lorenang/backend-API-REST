const db = require("../src/database/models");
const { Op } = require("sequelize");
const Generos = db.Generos; // modelo Generos
const generosController = {
    listado: async(req, res) => {
        try {
            const generos = await Generos.findAll();
            res.status(200).json(generos);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Hubo un error al obtener los generos.' });
        }
    }
}

module.exports = generosController;