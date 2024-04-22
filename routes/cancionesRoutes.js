/*Deberán estar presentes los siguientes endpoints:
    /canciones (GET) que muestre un listado de las canciones con sus propiedades
    /canciones (POST) para crear un nuevo registro de una canción
    /canciones/:id (GET) que muestre una canción
    /canciones/:id (PUT) para editar una canción
    /canciones/:id (DELETE) para eliminar una canción
*/

const express = require('express');
const router = express.Router();
const cancionesController = require("../controllers/cancionesController");
//listado -> muestra un listado de las canciones con sus propiedades
router.get("/canciones", cancionesController.listado);
//canciones -> para crear un nuevo registro de una canción
router.post("/canciones", cancionesController.crearCancion);
//detalle -> muestra en detalle la cancion
router.get("/canciones/:id", cancionesController.detalle);
//editar -> para editar una cancion
router.put("/canciones/:id", cancionesController.editar);
//eliminar -> para eliminar una cancion
router.delete("/canciones/:id", cancionesController.eliminar);

module.exports = router;