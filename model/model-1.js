// const Merchant = require('./model');
const db = require('../config/db');

class Merchant {

    static getMerchants(cb) {
        const sql = `SELECT * FROM merchant_info`;

        db.query(sql, (err, row) => {
            cb(err, row)
        })
    }

    static getMerchant(id, cb) {
        let sql = `SELECT * FROM merchant_info WHERE id = ?`;

        // let id = req.params.id

        db.query(sql, [id], (err, row) => {
            cb(err, row)
        })
    }

    static addMerchant(body, cb) {
        let sql = `INSERT INTO merchant_info 
        (id, password, address, join_date, phone_number) 
        VALUES(?,?,?,?,?)`;

        // let data = req.body

        const dataMerchant = [
            body.id,
            body.password,
            body.address,
            body.join_date,
            body.phone_number
        ];

        db.query(sql, dataMerchant, (err, row) => {
            cb(err, row)
        })

        // db.query(sql, dataMerchant, (err, result) => {

        //     if (err) {
        //         console.log(err)
        //     }
        //     console.log(result)
        //     res.send(result).status(201)
        // })
    }

    // static findById(id) {
    //     let sql = `SELECT * FROM merchant_info WHERE id = ?`;

    //     return sql.find(val => val.id === id)

    //     db.query(sql, [id], (err, result) => {
    //         if (err) throw err;
    //         res.send(result)
    //     })
    // }

    static updateMerchant(req, cb) {
        let sql = `UPDATE merchant_info SET
        password = ?,
        address = ?,
        join_date = ?,
        phone_number = ?
        WHERE id = ?`;

        let data = req.body

        const dataMerchant = [
            data.password,
            data.address,
            data.join_date,
            data.phone_number,
            req.params.id
        ];

        db.query(sql, dataMerchant, (err, row) => {
            cb(err, row)
        })

    }

    static deleteMerchant(id, cb) {
        let sql = `DELETE FROM merchant_info WHERE id = ?`;

        db.query(sql, [id], (err, row) => {
            cb(err, row)
        })
    }
}

//---------------------------------------------------------------------------------

class Product {

    // static getProducts(cb) {
    //     let sql = `SELECT * FROM product_info`;

    //     db.query(sql, (err, row) => {
    //         cb(err, row)
    //     })
    // }

    // static getProduct(id, cb) {
    //     let sql = `SELECT * FROM product_info WHERE id = ?`;

    //     // let id = req.params.id

    //     db.query(sql, [id], (err, row) => {
    //         cb(err, row)
    //     })
    // }

    // static addProduct(body, cb) {
    //     let sql = `INSERT INTO product_info
    //     (id, name, quantity, price)
    //     VALUES(?,?,?,?)`;

    //     const dataProduct = [
    //         body.id,
    //         body.name,
    //         body.quantity,
    //         body.price
    //     ];

    //     db.query(sql, dataProduct, (err, row) => {
    //         cb(err, row)
    //     })
    // }

    // static updateProduct(req, cb) {
    //     let sql = `UPDATE product_info SET
    //     name = ?,
    //     quantity = ?,
    //     price = ?
    //     WHERE id = ?`;

    //     let data = req.body

    //     const dataProduct = [
    //         data.name,
    //         data.quantity,
    //         data.price,
    //         req.params.id
    //     ];

    //     db.query(sql, dataProduct, (err, row) => {
    //         cb(err, row)
    //     })

    // }

    // static deleteProduct(id, cb) {
    //     let sql = `DELETE FROM product_info WHERE id = ?`;

    //     db.query(sql, [id], (err, row) => {
    //         cb(err, row)
    //     })
    // }

};

module.exports = Merchant
// module.exports = Product