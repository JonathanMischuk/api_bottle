const { getLakes } = require('../queries');

module.exports = (req, res) => {
    getLakes()
        .then(response => res.json(response))
        .catch(error => res.json(error));
};
