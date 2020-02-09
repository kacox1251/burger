CREATE DATABASE burger_DB;
USE burger_DB;

CREATE TABLE burgers {
    id int auto_increment,
    burger_name varchar,
    devoured boolean,
    primary key (id)
}