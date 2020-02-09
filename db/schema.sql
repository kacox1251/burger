CREATE DATABASE burger_DB;
USE burger_DB;

CREATE TABLE burgers (
    id int auto_increment,
    burger_name varchar(255),
    devoured boolean,
    primary key (id)
);