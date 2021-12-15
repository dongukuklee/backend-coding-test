const { Router } = require("express");
const router = Router();
const stores = require('./stores')

router.get("/stores",stores.getStores)
router.get("/stores/:name",stores.searchStores)

module.exports = router;