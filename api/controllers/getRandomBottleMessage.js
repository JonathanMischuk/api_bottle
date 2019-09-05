const { getRandomBottleMessage } = require('../queries');
const { resFormatJSON } = require('../../utils');

module.exports = (req, res) => {
    getRandomBottleMessage(req.params)
        .then(response => resFormatJSON(res, response))
        .catch(err => resFormatJSON(res, err));
};
