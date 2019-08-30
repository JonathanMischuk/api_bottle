const { getBottles } = require('../queries');

module.exports = (req, res) => {
    getBottles()
        .then(response => res.json(response))
        .catch(error => res.json(error));
};
