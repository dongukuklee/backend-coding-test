const axios = require("axios");
const { sortBy } = require("underscore");
const { getGeo } = require("../../utils/geoFunction");
module.exports = async (req, res) => {
  const { postcode, radius } = req.params;
  const geoResult = await getGeo(postcode);
  if (!geoResult) {
    res.status(404).json({ message: "Data Not Found" });
  } else {
    const { latitude, longitude } = geoResult;
    res.status(200).json({
      data: sortBy(
        (
          await axios.get(
            `https://api.postcodes.io/postcodes?lon=${longitude}&lat=${latitude}&radius=${radius}`
          )
        ).data.result,
        "latitude"
      ).reverse(),
    });
  }
};
