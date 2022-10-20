var express = require('express');
var router = express.Router();

const PayloadEntity = require('../models/payload-pix-model');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* POST home page. */
router.post('/', function (req, res, next) {
    try {
        var bodyRes = new PayloadEntity(req.body['pixKey'], req.body['name'], req.body['city'], req.body['idTransaction'], req.body['message'], req.body['amount']);

        res.status(201).send(bodyRes);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
