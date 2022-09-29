const express = require("express");
const router = express.Router();
const txt_Controller = require("../controllers/Txt_Controller")

router.post('/create', txt_Controller.customer);

router.get('/trxDetai', txt_Controller.callAxios);

module.exports = router;