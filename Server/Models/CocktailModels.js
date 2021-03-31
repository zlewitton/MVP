const Cocktail = require('../../ETL/DB/index.js');

exports.retrieve = (req, res) => {
  return Cocktail.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
}