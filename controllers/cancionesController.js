const db = require("../src/database/models");
const { Op } = require("sequelize");
const Canciones = db.Canciones; // modelo Canciones
const cancionesController = {
    listado: async(req, res) => {
        try {
            const canciones = await Canciones.findAll();
            res.status(200).json(canciones);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
        }
    },
    crearCancion: async (req, res) => {
        try {
            const nuevaCancion = await Canciones.create(req.body);
            res.status(201).json(nuevaCancion);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Hubo un error al crear la canción.' });
        }
    },
    detalle: async (req, res) => {
        const { id } = req.params;
        try {
            const cancion = await Canciones.findByPk(id);
            if (!cancion) {
                return res.status(404).json({ error: 'La canción no fue encontrada.' });
            }
            res.status(200).json(cancion);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Hubo un error al obtener la canción.' });
        }
    },
    editar: async (req, res) => {
        const { id } = req.params;

        try {
            // Buscar la canción por su id
            let cancion = await Canciones.findByPk(id);
            if (!cancion) {
                return res.status(404).json({ error: 'La canción no fue encontrada.' });
            }

            // Actualizar la canción con los nuevos datos
            await cancion.update(req.body);

            // Obtener la canción actualizada
            cancion = await Canciones.findByPk(id);

            // Responder con la canción actualizada
            res.status(200).json(cancion);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Hubo un error al editar la canción.' });
        }
    },
    eliminar: async (req, res) => {
        const { id } = req.params;

        try {
            // Buscar la canción por su id
            const cancion = await Canciones.findByPk(id);
            if (!cancion) {
                return res.status(404).json({ error: 'La canción no fue encontrada.' });
            }

            // Eliminar la canción
            await cancion.destroy();

            // Responder con un mensaje de éxito
            res.status(200).json({ message: 'La canción fue eliminada exitosamente.' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Hubo un error al eliminar la canción.' });
        }
    }
}

module.exports = cancionesController;