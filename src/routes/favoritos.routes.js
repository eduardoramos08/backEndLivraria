import express from "express";

import{ listarFavoritos,criarFavorito, retirarFavorito} from "../controllers/favoritos.controller.js";

const router = express.Router();

router.get("/", listarFavoritos);
router.post("/", criarFavorito);
router.delete("/:id",retirarFavorito);

export default router;