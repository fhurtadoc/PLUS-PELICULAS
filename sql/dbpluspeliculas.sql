CREATE DATABASE plus_peliculas;
CREATE TABLE elementosmulti(

    id_elementosmulti INT(20)  AUTO_INCREMENT not null,
    nombre VARCHAR(255) not null,
    genero VARCHAR(20) not null,
    categoria VARCHAR(20) not null,
    año INT (11) not null,
    imagen VARCHAR(255) not null,
    descripcion VARCHAR(255) not null,
    capturas VARCHAR(255) not null,
    CONSTRAINT pk_elementomultimedia PRIMARY KEY (id_elementosmulti)
    
);
