const { addBottle } = require('../queries');
const { resFormatJSON } = require('../../utils');

module.exports = (req, res) => {
    addBottle(req.query)
        .then(response => resFormatJSON(res, response))
        .catch(err => resFormatJSON(res, err));
};
