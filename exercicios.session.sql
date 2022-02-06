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
-- [M2S07] Ex 3 - Inserindo dados
INSERT INTO restaurante (nome, telefone, endereco, categoria) 
VALUES
('Comidas Tradicionais', '(21)99012-1212', 'Rua jurandir Nº50, Bairro damaceno, Cidade: Rio de Janeiro, UF: RJ', 'Comida brasileira'),
('Burger King', '(48)99012-3456', 'Rua presidente kennedy Nº446, Bairro Kobrasol, Cidade: São José, UF: SC', 'Lanchonete'),
('Pizza Kut', '(48)99012-0000', 'Rua das borboletas Nº43, Bairro Cento, Cidade: Florianópolis, UF: SC', 'Pizzaria'),
('Curry Pasta', '(41)99000-1111', 'Av Manoel Ribas  Nº750, Bairro Boa vista, Cidade: Curitiba, UF: PR', 'Comida brasileira'),
('Gugu Lanches', '(51)98765-4321', 'Rua São Luiz Nº50, Bairro damaceno, Cidade: Porto Alegre, UF: RS', 'Lanchonete');

SELECT * FROM restaurante;

ALTER TABLE food4dev.prato ALTER COLUMN descricao TYPE text;
INSERT INTO prato (titulo, descricao, preco)
VALUES
('Marmita da Hora', 'Prato tradicional arroz, feijao, batata, bife', 10.99),
('Whopper Costela', 'O pão com gergelim do WHOPPER®, nossa maionese de fabricação própria, alface e tomate cortados na hora, aquela nossa cebola crocante como toda Onion Rings deve ser, junto do nosso delicioso molho Furioso, queijo e a grande novidade: um hambúrguer de carne de porco com aquele aroma inconfundível de Costelinha', 29.90),
('Pizza Combo', 'Pizza três sabores a escolha do cliente, refri e broto doce', 59.90),
('Macarronada italiana', 'Deliciosa massa italiana acompanha vinho tinto', 35.90),
('X-Bacon', 'Delicioso lanche com carne salada e bacon', 25.90);
SELECT * FROM prato;
-- [M2S07] Ex 4 - Alterando tabelas - Restaurante
ALTER TABLE food4dev.restaurante ADD COLUMN endereco_rua VARCHAR(80);
ALTER TABLE food4dev.restaurante ADD COLUMN endereco_numero INT;
ALTER TABLE food4dev.restaurante ADD COLUMN endereco_comp VARCHAR(80);
ALTER TABLE food4dev.restaurante ADD COLUMN endereco_bairro VARCHAR(80);
ALTER TABLE food4dev.restaurante ADD COLUMN endereco_cidade VARCHAR(80);
ALTER TABLE food4dev.restaurante ADD COLUMN endereco_estado VARCHAR(80);

-- [M2S07] Ex 5 - Alterando tabelas - Pratos
ALTER TABLE food4dev.prato add COLUMN categorias VARCHAR(80);
ALTER TABLE food4dev.prato add COLUMN url_foto TEXT;
SELECT * from food4dev.prato;

-- [M2S07] Ex 6 - Normalizando a tabela
ALTER TABLE food4dev.restaurante ADD COLUMN id serial PRIMARY KEY;
ALTER TABLE food4dev.restaurante ADD COLUMN url_foto VARCHAR(255) DEFAULT 'https://via.placeholder.com/150 ';


UPDATE food4dev.restaurante SET endereco_rua = 'Rua jurandir' WHERE id = 1;
UPDATE food4dev.restaurante SET endereco_bairro = 'Damaceno' WHERE id = 1;
UPDATE food4dev.restaurante SET endereco_numero = 50 WHERE id = 1;
UPDATE food4dev.restaurante SET endereco_cidade = 'Rio de janeiro' WHERE id = 1;
UPDATE food4dev.restaurante SET endereco_estado = 'Rio de janeiro' WHERE id = 1;

UPDATE food4dev.restaurante SET endereco_rua = 'Rua presidente kennedy' WHERE id = 2;
UPDATE food4dev.restaurante SET endereco_numero = 446 WHERE id = 2;
UPDATE food4dev.restaurante SET endereco_bairro = 'Kobrasol' WHERE id = 2;
UPDATE food4dev.restaurante SET endereco_cidade = 'São jose' WHERE id = 2;
UPDATE food4dev.restaurante SET endereco_estado = 'Santa catarina' WHERE id = 2;

UPDATE food4dev.restaurante SET endereco_rua = 'Rua das borboletas'  WHERE id = 3;
UPDATE food4dev.restaurante SET endereco_numero = 43 WHERE id = 3;
UPDATE food4dev.restaurante SET endereco_bairro = 'Centro' WHERE id = 3;
UPDATE food4dev.restaurante SET endereco_cidade = 'Florianópolis' WHERE id = 3;
UPDATE food4dev.restaurante SET endereco_estado = 'Santa catarina' WHERE id = 3;

UPDATE food4dev.restaurante SET endereco_rua = 'Av manoel ribas' WHERE id = 4;
UPDATE food4dev.restaurante SET endereco_numero = 750 WHERE id = 4;
UPDATE food4dev.restaurante SET endereco_bairro = 'Boa vista' WHERE id = 4;
UPDATE food4dev.restaurante SET endereco_cidade = 'Curitiba' WHERE id = 4;
UPDATE food4dev.restaurante SET endereco_estado = 'Parana' WHERE id = 4;

UPDATE food4dev.restaurante SET endereco_rua = 'São luiz' WHERE id = 5;
UPDATE food4dev.restaurante SET endereco_numero = 50 WHERE id = 5;
UPDATE food4dev.restaurante SET endereco_bairro = 'Damaceno' WHERE id = 5;
UPDATE food4dev.restaurante SET endereco_cidade = 'Porto alegre' WHERE id = 5;
UPDATE food4dev.restaurante SET endereco_estado = 'Rio grande do sul' WHERE id = 5;

ALTER TABLE food4dev.restaurante DROP COLUMN endereco;
SELECT * from food4dev.restaurante;
-- [M2S07] Ex 7 - Refatoração das entidades
ALTER TABLE food4dev.prato ADD COLUMN id SERIAL PRIMARY KEY;
SELECT * FROM food4dev.prato;

-- [M2S07] Ex 8 - Relacionando entidades
ALTER TABLE food4dev.prato ADD COLUMN restaurante_id INT;
ALTER TABLE food4dev.prato ADD CONSTRAINT restaurante_id FOREIGN KEY (restaurante_id) REFERENCES food4dev.restaurante (id);