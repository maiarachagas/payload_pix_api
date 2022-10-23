var express = require('express');
var router = express.Router();

const controller = require('../controllers/pix_controller');


/* GET */
router.get('/', function (req, res, next) {
    res.send('respond with a resource-payload');
});

/* POST */
router.post('/create', function (req, res, next) {
    try {
        var data = {
            "pix": req.body['pixKey'], "name": req.body['name'], "city": req.body['city'], "idTransaction": req.body['idTransaction'], "amount": req.body['amount'], "message": req.body['message']
        };
        var bodyReq = data;
        var body = controller.generatePayload(bodyReq);

        res.status(201).send({ key: body });
    } catch (error) {
        res.send(`${error}`);
    }
});

module.exports = router;
