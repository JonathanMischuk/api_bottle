const { getBottles } = require('../queries');
const { resFormatJSON } = require('../../utils');

module.exports = (req, res) => {
    getBottles()
        .then(response => resFormatJSON(res, response))
        .catch(error => resFormatJSON(res, error));
};
