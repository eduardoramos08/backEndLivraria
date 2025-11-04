import {db} from "../config/db.js";

// ============================
//  Rotas CRUD
// ============================

export async function listarAvalicoes(req, res)  {
  try {
    const [rows] = await db.execute("SELECT * FROM avaliacoes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export async function postarAvaliacoes (req, res){
  try {
    const { usuario_id, livro_id, nota, comentario, sdata_avaliacao } = req.body;
    if (!usuario_id || !livro_id || !nota || !comentario || !data_avaliacao )
      return res.status(400).json({ erro: "Campos obrigatórios" });

    await db.execute(
      "INSERT INTO avaliacoes ( usuario_id, livro_id, nota, comentario, data_avaliacao ) VALUES (?, ?, ?,?, ?)",
      [usuario_id, livro_id, nota, comentario, data_avaliacao]
    );

    res.json({ mensagem: "Avaliação postada com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};