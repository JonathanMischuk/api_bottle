const { getLakes } = require('../queries');
const { resFormatJSON } = require('../../utils');

module.exports = (req, res) => {
    getLakes()
        .then(response => resFormatJSON(res, response))
        .catch(error => resFormatJSON(res, error));
};
