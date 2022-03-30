// const { errorForEach } = require('verror');
const Merchant = require('../model/model-1');

class MerchantControl {
    
    static getMerchants(req, res) {
        // res.status(200).json(Merchant.getMerchants())
        Merchant.getMerchants((err, row) => {
            if (err) {
                console.log(err)
                // throw err;
                res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row)
            }
        })
    }

    static getMerchant(req, res) {
        Merchant.getMerchant(req.params.id, (err, row) => {
            // res.status(200).json(Merchant.getMerchant(req.params.id))
            if (err) {
                res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row)
            }
        })
    }

    static addMerchant(req, res) {
        Merchant.addMerchant(req.body, (err, row) => {
            if (err) {
                console.log(err)
                res.status(404).json(error)
            } else if (row) {
                res.status(201).json(row)
            }
        })
    }


    // if (!req.body.id) {
    //     res.status(400).json({ message: 'id required' })
    // }

    // const existingId = Merchant.findById(req.body.id)

    // if (existingId) {
    //     res.status(400).json({ message: 'id has already created' })
    // }

    // res.status(201).json(Merchant.addMerchant(req.body))
    // res.send('Merchant added')


    static updateMerchant(req, res) {
        // res.status(201).json(Merchant.updateMerchant(req.body))
        Merchant.updateMerchant(req, (err, row) => {
            // res.status(200).json(Merchant.getMerchant(req.params.id))
            if (err) {
                res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row)
            }
        })
    }

    static deleteMerchant(req, res) {
        // res.status(200).json(Merchant.deleteMerchant(req.params.id))
        Merchant.deleteMerchant(req.params.id, (err, row) => {
            // res.status(200).json(Merchant.getMerchant(req.params.id))
            if (err) {
                res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row)
            }
        })
    }

//------------------------------------------------------------------------------------------

    // static getProducts(res) {
    //     Product.getProducts((err, row) => {
    //         if (err) {
    //             res.status(400).json({ message: 'Internal Server Error' })
    //         } else if (row) {
    //             res.status(200).json(row)
    //         }
    //     })
    // }


    // static getProduct(req, res) {
    //     Product.getProduct(req.params.id, (err, row) => {
    //         // res.status(200).json(Merchant.getMerchant(req.params.id))
    //         if (err) {
    //             res.status(400).json({ message: 'Internal Server Error' })
    //         } else if (row) {
    //             res.status(200).json(row)
    //         }
    //     })
    // }

    // static addProduct(req, res) {
    //     Product.addProduct(req.body, (err, row) => {
    //         if (err) {
    //             console.log(err)
    //             res.status(400).json({ message: 'Internal Server Error' })
    //         } else if (row) {
    //             res.status(201).json(row)
    //         }
    //     })
    // }


    // if (!req.body.id) {
    //     res.status(400).json({ message: 'id required' })
    // }

    // const existingId = Merchant.findById(req.body.id)

    // if (existingId) {
    //     res.status(400).json({ message: 'id has already created' })
    // }

    // res.status(201).json(Merchant.addMerchant(req.body))
    // res.send('Merchant added')


    // static updateProduct(req, res) {
    //     // res.status(201).json(Merchant.updateMerchant(req.body))
    //     Product.updateProduct(req, (err, row) => {
    //         // res.status(200).json(Merchant.getMerchant(req.params.id))
    //         if (err) {
    //             res.status(400).json({ message: 'Internal Server Error' })
    //         } else if (row) {
    //             res.status(200).json(row)
    //         }
    //     })
    // }

    // static deleteProduct(req, res) {
    //     // res.status(200).json(Merchant.deleteMerchant(req.params.id))
    //     Product.deleteProduct(req.params.id, (err, row) => {
    //         // res.status(200).json(Merchant.getMerchant(req.params.id))
    //         if (err) {
    //             res.status(400).json({ message: 'Internal Server Error' })
    //         } else if (row) {
    //             res.status(200).json(row)
    //         }
    //     })
    // }

}

module.exports = MerchantControl;