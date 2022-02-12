-- [M2S08] Ex 1 - Continuação do Food4Devs
CREATE SCHEMA food4dev;
SET SEARCH_PATH TO 'food4dev';
SELECT * FROM pratos p ;
SELECT r.categoria_id, r.categoria_old, * FROM restaurantes r;
ALTER TABLE restaurantes DROP column categoria_old ;

-- [M2S08] Ex 2 - Continuação do Food4Devs
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    numero_pedido INT NOT NULL,
    valor_entrega DECIMAL(5,2) NOT NULL CHECK(valor_entrega >= 0),
    data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    restaurante_id INT NOT NULL REFERENCES restaurantes(id)
);
-- [M2S08] Ex 3 - Continuação do Food4Devs
CREATE TABLE pedido_itens (
    id SERIAL PRIMARY KEY,
    prato_id INT NOT NULL REFERENCES pratos(id),
    pedido_id INT NOT NULL REFERENCES pedidos(id),
    valor DECIMAL(5,2) NOT NULL CHECK(valor >= 0),
    quantidade INT NOT NULL CHECK(quantidade > 0)
);
-- [M2S08] Ex 4 - Continuação do Food4Devs
CREATE TABLE restaurante_prato (
    restaurante_id INT NOT NULL REFERENCES restaurantes ON UPDATE CASCADE,
    prato_id INT NOT NULL REFERENCES pratos(id) ON UPDATE CASCADE,
    CONSTRAINT rest_prato_pkey PRIMARY KEY (restaurante_id, prato_id)
);
-- [M2S08] Ex 5 - Continuação do Food4Devs
INSERT
    INTO
    restaurante_prato (
        restaurante_id,
        prato_id
    ) (
        SELECT
            r.id AS restaurante_id,
            p.id AS prato_id
        FROM
            pratos p
        INNER JOIN restaurantes r ON
            r.id = p.restaurante_id
    );
-- a coluna categoria da tabela restaurantes ja foi excluida no exercicio 1;
ALTER TABLE pratos DROP COLUMN restaurante_id ;

-- [M2S08] Ex 6 - Continuação do Food4Devs
CREATE TABLE endereco(
    id SERIAL PRIMARY KEY,
    rua VARCHAR(100) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR (30) NOT NULL,
    uf CHAR(2) NOT NULL
);
CREATE TABLE clientes(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco_id INT REFERENCES endereco(id) 
);
ALTER TABLE pedidos ADD COLUMN cliente_id INT NOT NULL REFERENCES clientes(id);

-- [M2S08] Ex 7 - Continuação do Food4Devs
ALTER table endereco ADD COLUMN complemento varchar(30);
ALTER table endereco alter column uf type varchar(50);

INSERT
    INTO
    endereco (
        rua,
        numero,
        bairro,
        cidade,
        uf,
        complemento
) (SELECT
    r.endereco_rua,
    r.endereco_numero,
    r.endereco_bairro,
    r.endereco_cidade,
    r.endereco_estado,
    r.endereco_comp
FROM
    restaurantes r)
ALTER table restaurantes add column endereco_id int;

-- [M2S08] Ex 8 - Continuação do Food4Devs
UPDATE restaurantes
    SET endereco_id = e.id
FROM endereco e
WHERE e.rua = endereco_rua
AND e.numero = endereco_numero::TEXT
AND e.bairro = endereco_bairro
AND e.cidade = endereco_cidade
AND e.uf = endereco_estado;

-- [M2S08] Ex 9 - Continuação do Food4Devs
ALTER TABLE restaurantes 
DROP COLUMN endereco_rua,
DROP COLUMN endereco_numero,
DROP COLUMN endereco_comp,
DROP COLUMN endereco_bairro,
DROP COLUMN endereco_cidade,
DROP COLUMN endereco_estado;

INSERT INTO endereco (rua, numero, bairro, cidade, uf, complemento)
VALUES 
('Santos dumont', '1045', 'Bela Vista', 'Cuiabá', 'Mato grosso', 'Terreo 5'),
('São jose', '1453', 'Vila nova', 'Arapiraca', 'Alagoas', 'Conjunto 10'),
('Santo Antonio', '376', 'Planalto', 'Juiz de fora', 'Minas gerais', 'Sobreloja 10'),
('Ceará', '7877', 'Santo Antonio', 'Bacabal', 'Maranhão', 'Loja 8'),
('Espírito Santo', '1220', 'São Cristóvão', 'Sete Lagoas', 'Minas Gerais', 'Galeria 6'),
('Maranhão', '5679', 'Boa Vista', 'Senador Canedo', 'Goiás', 'Loja 4')
('Alagoas', '475', 'Santo Antônio', 'Cariacica', 'Espírito Santo', 'Andar 10'),
('Santos Dumont', '3278', 'Santo Antônio', 'Luziânia', 'Goiás', 'Cobertura 8'),
('Tiradentes', '369', 'São Francisco', 'Altamira', 'Pará', 'Terreo 1'),
('Santa Maria', '2920', 'Industrial', 'Santarém', 'Pará','Quadra 2'),
('Belo Horizonte', '2365', 'Centro', 'Timon', 'Maranhão', 'Sala 4'),
('Alagoas', '9149', 'Bela Vista', 'Campina Grande', 'Paraíba', 'Conjunto 4');

INSERT INTO clientes (nome) 
VALUES
('João', 3),
('Maria', 10),
('Alberta', 19),
('Dolores', 18),
('Jack', 14),
('Tadeu', 12),
('Karolina', 8),
('Carolina', 13),
('Margarete', 17),
('Geruza', 16);

INSERT INTO pedidos (numero_pedido, valor_entrega, data_pedido, restaurante_id, cliente_id)
values
(0001, 5.9, NOW(), 1, 8),
(0001, 12, NOW(), 2,6),
(0002, 10.5, NOW(), 2,1),
(0001, 4.45, NOW(), 3,8),
(0002, 15, NOW(), 3,4),
(0001, 6, NOW(), 5,10);

INSERT INTO pedido_itens (prato_id, pedido_id, valor, quantidade)
VALUES
(1, 1, (select (p.preco * 1) from pratos p WHERE id = 3), 1),
(2, 2, (select (p.preco * 1) from pratos p WHERE id = 2), 1),
(2, 3, (select (p.preco * 1) from pratos p WHERE id = 2), 2),
(3, 4, (select (p.preco * 2) from pratos p WHERE id = 3), 2),
(3, 6, (select (p.preco * 1) from pratos p WHERE id = 3), 1),
(15, 5, (select (p.preco * 3) from pratos p WHERE id = 15), 3);

-- [M2S08] Ex 10 - Finalizando o Food4Devs
-- - a) Uma query que retorne todos os clientes com seus endereços (inner join)
SELECT * FROM clientes c 
INNER JOIN endereco e ON c.endereco_id = e.id
-- - b) Uma query que retorne todos os restaurantes e seus respectivos pratos (inner join pratos_restaurantes e pratos)
SELECT r.*, p.* FROM restaurantes r 
inner join restaurante_prato rp on r.id = rp.restaurante_id 
INNER join pratos p on p.id = rp.prato_id
-- - c) Uma query que selecione todos os pedidos por cliente, constando o endereço do restaurante e endereço do cliente (inner join pedidos e clientes, restaurantes e endereços).
SELECT
    p.numero_pedido,
    c.id AS codigo_cliente,
    c.nome,
    r.nome AS restaurante,
    e.*
FROM
    pedidos p
INNER JOIN clientes c ON
    p.cliente_id = c.id
INNER JOIN restaurantes r ON
    r.id = p.restaurante_id
LEFT JOIN endereco e ON
    c.endereco_id = e.id

