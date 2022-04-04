const db = require('./db');

class dataBase {

    static connectDb() {
        db.connect((err) => {
            if (err) throw console.log("data base not connected");
            console.log("database connected")
        })
    }

    static createMerchants() {

        let sql = `CREATE TABLE merchant_info(
        id INT NOT NULL PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        join_date DATETIME NOT NULL,
        phone_number BIGINT
        )`

        db.query(sql, (err) => {
            if (err) throw err;
            console.log("merchant_info table created")
        });
    }

    static createProduct() {

        let sql = `CREATE TABLE product_info(
        id INT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        quantity INT(45) NOT NULL,
        price INT(255) NOT NULL
        )`

        db.query(sql, (err) => {
            if (err) throw err;
            console.log("product_info table created")
        });
    }

}

const activeDb = [
    dataBase.connectDb(),
    // dataBase.createMerchants(),
    // dataBase.createProduct()
]

module.exports = activeDb;