const { getGeo } = require("../../utils/geoFunction");

module.exports = async (req, res) => {
  const { postcode } = req.params;
  const geoResult = await getGeo(postcode);
  if (!geoResult) {
    res.status(404).json({ message: "Data Not Found" });
  } else {
    res.status(200).json({ data: geoResult });
  }
};
