const {map}  = require("underscore");
const stores= require('../../stores.json')

module.exports = (req, res) => {
    res.status(200).json({
            stores: map(stores, store => store.name)
        }
    );
  }