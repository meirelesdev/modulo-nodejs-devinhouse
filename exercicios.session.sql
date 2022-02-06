-- [M2S07] Ex 1 - Introdução e primeira tabela
CREATE SCHEMA food4dev;
SET SEARCH_PATH TO 'food4dev';
CREATE TABLE restaurante(
    nome VARCHAR(80),
    telefone VARCHAR(15),
    endereco VARCHAR(150),
    categoria VARCHAR(80)
);
SELECT * from restaurante;
-- [M2S07] Ex 2 - Definição da segunda tabela
CREATE TABLE prato(
    titulo VARCHAR(80),
    descricao VARCHAR(300),
    preco NUMERIC(5,2)
);