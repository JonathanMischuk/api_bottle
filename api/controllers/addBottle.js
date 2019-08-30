const { addBottle } = require('../queries');

module.exports = (req, res) => {
    addBottle(req.query)
        .then(response => res.json(response))
        .catch(err => res.json(err));
};
