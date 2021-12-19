const {map}  = require("underscore");
const stores= require('../../stores.json')

module.exports = async (req, res) => {
    res.status(200).json({
            stores: map(stores, store => store.name)
        }
    );
  }