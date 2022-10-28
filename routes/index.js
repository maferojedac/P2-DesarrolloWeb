const express = require('express');

const {
    createAccount,
    updateAccount,
    CompraVenta} = require('../controllers');

    const router = express.Router();

    router.post('/account', createAccount);
    router.put('/account', updateAccount); 
    router.post('/account/:id/order', CompraVenta)

    module.exports = {
        router
    }