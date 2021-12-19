const { map, filter, each, isNull } = require("underscore");
const stores = require("../../stores.json");
const { getBulkGeo } = require("../../utils/geoFunction");

module.exports = async (req, res) => {
  const receivedData = JSON.parse(req.params.stores);
  const data = {};
  if (!Array.isArray(receivedData)) {
    res.status(400).json({ message: "Bad Request" });
  } else {
    each(
      await getBulkGeo(
        map(
          filter(stores, (store) => receivedData.includes(store.name)),
          (store) => store.postcode
        )
      ),
      (obj, idx) => {
        const result = obj.result;
        if (isNull(result)) {
          data[`${receivedData[idx]}`] = {
            postcode: obj.query,
            message: "Postcode not found",
          };
        } else {
          const { postcode, latitude, longitude } = result;
          data[`${receivedData[idx]}`] = { postcode, latitude, longitude };
        }
      }
    );

    res.status(200).json({ data });
  }
};
