CREATE DATABASE IF NOT EXISTS transit;
USE transit;

CREATE TABLE IF NOT EXISTS users(
	email VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    PRIMARY KEY(email)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS ciudadano(
	nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
    cedula INT NOT NULL,
    fecha_nac date NOT NULL,
    categoria VARCHAR(2),
    fecha_expedicion date NOT NULL,
    PRIMARY KEY(cedula)
)ENGINE=INNODB;

select * from ciudadano;
select * from users;
INSERT INTO users (email, pass) values ("admin@gmail.com","123");