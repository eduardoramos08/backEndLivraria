import { db } from "../config/db.js";

// ==============================
// Rotas CRUD - Reservas
// ==============================

export async function listarReservas(req, res) {
  try {
    const [rows] = await db.execute("SELECT * FROM reservas");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

export async function criarReserva(req, res) {
  try {
    const { usuario_id, livro_id, data_retirada, data_devolucao, confirmado_email } = req.body;

    if (!usuario_id || !livro_id || !data_retirada || !data_devolucao) {
      return res.status(400).json({ erro: "Campos obrigatórios não preenchidos." });
    }

    await db.execute(
      `INSERT INTO reservas 
       (usuario_id, livro_id, data_retirada, data_devolucao, confirmado_email) 
       VALUES (?, ?, ?, ?, ?)`,
      [usuario_id, livro_id, data_retirada, data_devolucao, confirmado_email ?? false]
    );

    res.json({ mensagem: "Reserva criada com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

export async function retirarReserva(req, res) {
  try {
    const { id } = req.params;
    const [result] = await db.execute("DELETE FROM reservas WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Reserva não encontrada." });
    }

    res.json({ mensagem: "Reserva retirada com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}
