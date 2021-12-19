const { Router } = require("express");
const router = Router();
const stores = require("./stores");
const geo = require("./geo");

router.get("/stores", stores.getStores);
router.get("/stores/:name", stores.searchStores);
router.get("/stores/:postcode/:radius", stores.getNearbyStore);

router.get("/geo/:postcode", geo.getGeoResult);
router.get("/geo/bulk/:stores", geo.getBulkGeoResult);

module.exports = router;
