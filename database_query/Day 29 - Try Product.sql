create database merchant_services;

use merchant_services;

DROP DATABASE try; 

ALTER TABLE `merchant_info` 
CHANGE COLUMN `join_date` `join_date` DATETIME NOT NULL ;

ALTER TABLE `merchant_info` 
CHANGE COLUMN `phone_number` `phone_number` varchar(255) NOT NULL ;

DROP TABLE merchant_info; 

INSERT INTO `merchant_info` 
(`id`, `password`, `address`, `join_date`, `phone_number`) 
VALUES ('1', '12345', 'jl.jalan', '2022-10-20 10:11:00', '085777777777');

truncate table merchant_info;

truncate table product_info;