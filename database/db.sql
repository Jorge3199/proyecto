CREATE DATABASE db_links;

USE db_links;

-- TABLE USER
-- all pasword wil be encrypted using SHA1
CREATE TABLE users (
  id INT(11) NOT NULL,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

INSERT INTO users (id, username, password, fullname) 
  VALUES (1, 'john', 'password1', 'John Carter');

SELECT * FROM users;

-- LINKS TABLE
CREATE TABLE links (
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE links
  ADD PRIMARY KEY (id);

ALTER TABLE links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;

-- /////////////////////////////
CREATE TABLE favorito (
  id INT(11) NOT NULL,
  id_cliente INT,
  id_producto INT,
  CONSTRAINT fk_cliente FOREIGN KEY(id_cliente) REFERENCES cliente(id),
  CONSTRAINT fk_producto FOREIGN KEY(id_producto) REFERENCES links(id)
);

ALTER TABLE favorito
  ADD PRIMARY KEY (id);

ALTER TABLE favorito
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE favorito;

-- /////////////////////////////
CREATE TABLE categoria (
  id INT(11) NOT NULL,
  modelo VARCHAR(150) NOT NULL
);

ALTER TABLE categoria
  ADD PRIMARY KEY (id);

ALTER TABLE categoria
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 0;

DESCRIBE categoria;

