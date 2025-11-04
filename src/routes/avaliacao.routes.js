import express from "express";

import{listarAvalicoes, postarAvaliacoes} from "../controllers/avaliacoes.controller.js";

const router = express.Router();

router.get("/", listarAvalicoes);
router.post("/",postarAvaliacoes);

export default router;