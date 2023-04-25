const express = require("express");
const router = express.Router();
const headerCtrl = require("../controllers/header");

router.get("/api/whoami", headerCtrl.index);

module.exports = router;
