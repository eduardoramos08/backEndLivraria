import express from "express";
import {
  listarUsuario,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
  obterUsuario
} from "../controllers/usuario.controller.js"; 
const router = express.Router();

// ============================
//  Rotas CRUD de Usuário
// ============================

router.get("/", listarUsuario);
router.get("/:id", obterUsuario);
router.post("/", criarUsuario);
router.put("/:id", atualizarUsuario);
router.delete("/:id", deletarUsuario);

export default router;
