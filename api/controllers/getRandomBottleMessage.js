const { getRandomBottleMessage } = require('../queries');

module.exports = (req, res) => {
    // console.log(req.params.name)

    getRandomBottleMessage(req.params)
        .then(response => {
            // console.log(response);

            res.json(response);
        })
        .catch(err => res.json(err));
};
