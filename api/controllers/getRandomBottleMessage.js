const { getRandomBottleMessage } = require('../queries');

module.exports = (req, res) => {
    getRandomBottleMessage(req.params)
        .then(response => res.json(response))
        .catch(err => res.json(err));
};
