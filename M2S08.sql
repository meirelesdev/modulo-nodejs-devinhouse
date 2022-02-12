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