const express = require('express');

const {
    createAccount,
    updateAcount,
    CompraVenta} = require('../controllers');

    const router = express.Router();

    router.post('/account', createAccount);
    /* router.put('/account/', updateAcount);
    router.post('/account/:id/order', CompraVenta) */

    module.exports = {
        router
    }