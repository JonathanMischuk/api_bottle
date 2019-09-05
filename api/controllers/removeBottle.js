const { removeBottle } = require('../queries');
const { resFormatJSON } = require('../../utils');

module.exports = (req, res) => {
    removeBottle(req.params)
        .then(response => resFormatJSON(res, response))
        .catch(err => resFormatJSON(res, err));
};
