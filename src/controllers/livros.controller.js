import {db} from "../config/db.js";

// ============================
//  Rotas CRUD
// ============================

export async function listarLivros(req, res)  {
  try {
    const [rows] = await db.execute("SELECT * FROM livros");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export async function buscarLivros(req, res)  {
  try {
    const [rows] = await db.execute("SELECT * FROM livros WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ erro: "Livro não encontrado" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export async function criarLivro (req, res){
  try {
    const { titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse, ativo,criado_em, atualizado_em } = req.body;
    if (!titulo || !autor || !genero ||!editora ||! ano_publicacao||! isbn||! idioma||! formato||!caminho_capa||!sinopse||!ativo||!criado_em||! atualizado_em)
      return res.status(400).json({ erro: "Campos obrigatórios" });

    await db.execute(
      "INSERT INTO livros ( titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse, ativo,criado_em, atualizado_em) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?)",
      [titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse, ativo,criado_em, atualizado_em]
    );

    res.json({ mensagem: "Livro criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export async function atualizarLivro (req, res) {
  try {
    const { titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse, ativo,criado_em, atualizado_em } = req.body;
    await db.execute(
      "UPDATE usuarios SET titulo = ?, autor = ?, genero = ?, editora = ?, ano_publicacao = ?, isbn = ?, idioma = ?, formato = ?, caminho_capa = ?, sinopse = ?, ativo,criado_em = ?, atualizado_em = ? WHERE id = ?",
      [nome, email, senha, req.params.id]
    );
    res.json({ mensagem: "Livro atualizado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export async function deletarLivro (req, res) {
  try {
    await db.execute("DELETE FROM livros WHERE id = ?", [req.params.id]);
    res.json({ mensagem: "Livro deletado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};