import express from "express";

import { listarReservas,criarReserva,retirarReserva  } from "../controllers/reservas.controller.js";

const router = express.Router();

router.get("/", listarReservas);
router.post("/", criarReserva);
router.delete("/:id", retirarReserva);

export default router;