const { getBottles, getLakes } = require('../queries');

module.exports = async (req, res) => {
    const bottles = await getBottles();

    getLakes()
        .then(lakesResponse => {
            const data = lakesResponse.map(lake => {
                const retVal = {
                    lake,
                    bottles: bottles.filter(bottle => lake.id === bottle.lake_id)
                };

                retVal.bottleCount = retVal.bottles.length;

                const messageLengthSum = retVal.bottles
                    .map(bottle => bottle.message.length)
                    .reduce((acc, val) => acc += val, 0);

                retVal.averageMessageLength = (Math.round(messageLengthSum / retVal.bottleCount)) || 0;

                return retVal;
            });

            res.json(data);
        })
        .catch(error => res.json(error));
};
