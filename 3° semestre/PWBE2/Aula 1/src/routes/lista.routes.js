const express = require("express");

const router = express.Router();

const listaControllers = require("../controllers/lista.controller");

router.get("/listar", listaControllers.listarClientes);
router.post("/cliente", listaControllers.cadastrarCliente);

module.exports = router;