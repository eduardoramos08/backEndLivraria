
-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS dblivraria;
USE dblivraria;

-- Criação da tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(100) NOT NULL
);

-- Inserção de usuários de exemplo
INSERT INTO usuarios (nome, email, senha) VALUES
('Vitor Lima', 'vitor.lima@email.com', '1234'),
('Pedro Campos', 'pedro.campos@email.com', 'abcd'),
('Pedro Gabriel', 'pedro.gabriel@email.com', 'senha123'),
('Davi Guedes', 'davi.guedes@email.com', 'teste123'),
('Matheus Lima', 'matheus.lima@email.com', '3210');

CREATE TABLE if NOT EXISTS livros(
  id int AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  disponivel TINYINT NOT NULL,
  dataPublicao DATE NOT NULL,
  editora VARCHAR(100) NOT NULL,
  
)
