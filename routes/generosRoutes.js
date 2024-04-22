/*Deberán estar presentes los siguientes endpoints:
    /generos (GET) listado de todos los géneros con sus canciones
*/
const express = require('express');
const router = express.Router();
const generosController = require("../controllers/generosController");
//listado -> muestra un listado de las canciones con sus propiedades
router.get("/generos", generosController.listado);

module.exports = router;