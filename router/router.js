const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Merchant = require('../controller/control-1');
const Product = require('../controller/control-2');
const Login = require('../controller/control-3');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');
// const middleware1 = process.env.Auth;

//---------------------------------------------------------------------------------------------------------------------

// router.get('/merchant',  Merchant.getMerchants);
router.get('/merchant', middleware.validate, Merchant.getMerchants);

// router.get('/merchant/:id', Merchant.getMerchant);
router.get('/merchant/:id', middleware.validate, Merchant.getMerchant);

// router.post('/merchant', Merchant.addMerchant);
router.get('/merchant', middleware.validate, Merchant.addMerchant);

// router.put('/merchant/:id', Merchant.updateMerchant);
router.get('/merchant/:id', middleware.validate, Merchant.updateMerchant);

// router.delete('/merchant/:id', Merchant.deleteMerchant);
router.get('/merchant/:id', middleware.validate, Merchant.deleteMerchant);

//---------------------------------------------------------------------------------------------------------------------

router.get('/product', Product.getProducts);
router.get('/product/:id', Product.getProduct);
router.post('/product', Product.addProduct);
router.put('/product/:id',Product.updateProduct);
router.delete('/product/:id', Product.deleteProduct);

//---------------------------------------------------------------------------------------------------------------------

router.post('/login', Login.login);

router.get('/login', middleware.validate, (req, res) => {
    res.status(200).json({ message: 'welcome' })
});

//---------------------------------------------------------------------------------------------------------------------

module.exports = router;