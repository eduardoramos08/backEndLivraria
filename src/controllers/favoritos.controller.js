import { db } from "../config/db";

// ==============================
// Rotas CRUD - Favoritos   
// ==============================

export async function listarFavoritos(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM favoritos");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }    
}

export async function criarFavorito(req, res) {
    try {
        const { usuario_id, livro_id, data_favorito } = req.body;

        if (!usuario_id || !livro_id || !data_favorito) {
            return res.status(400).json({ erro: "Campos obrigatórios não preenchidos" });
        }
       
        await db.execute(
            `INSERT INTO favoritos (usuario_id, livro_id, data_favorito)
             VALUES (?, ?, ?)`,
            [usuario_id, livro_id, data_favorito]
        );

        res.json({ mensagem: "Livro favoritado com sucesso!" });

    } catch (error) {
        res.status(500).json({ erro: error.message });       
    }  
}

export async function retirarFavorito(req, res) {
  try {
    const { id } = req.params;
    const [result] = await db.execute("DELETE FROM favoritos WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Livro favoritado não encontrado." });
    }

    res.json({ mensagem: "Favorito retirado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}