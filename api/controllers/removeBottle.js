const { removeBottle } = require('../queries');

module.exports = (req, res) => {
    removeBottle(req.params)
        .then(response => res.json(response))
        .catch(err => res.json(err));
};
