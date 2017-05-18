const Space = require('../models').Space;

module.exports = {
  create(req, res) {
    return Space
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      })
      .then(space => res.status(201).send(space))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
  return Space
    .findAll()
    .then(space => {
      if (!space) {
        return res.status(404).send({
          message: 'Space Not Found',
        });
      }
      return res.status(200).send(space);
    })
    .catch(error => res.status(400).send(error));
},
};
