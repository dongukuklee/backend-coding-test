const { map,filter,isNull } = require("underscore");
const stores= require('../../stores.json')


const makeRegExp = (string) => {
  const reg = `^${string.replace(/ /g, "_").toUpperCase()}`;
  return new RegExp(reg);
};

module.exports = (req, res) => {
    const { name } = req.params;

    res.status(200).json({
        stores: map(
          filter(stores, store => !isNull(makeRegExp(name).exec(store.name.toUpperCase()))), 
          store => store.name
          )
        }
    );
  }