const axios = require("axios");

module.exports = {
  getGeo: async (postcode) => {
    try {
      const { latitude, longitude } = (
        await axios.get(`https://api.postcodes.io/postcodes/${postcode}`)
      ).data.result;
      return { latitude, longitude };
    } catch (error) {
      return;
    }
  },

  getBulkGeo: async (postcodes) => {
    return (
      await axios.post("https://api.postcodes.io/postcodes", {
        postcodes,
      })
    ).data.result;
  },
};
