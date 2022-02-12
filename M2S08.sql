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
