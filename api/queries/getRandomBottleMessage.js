const { db } = require('../../db');

module.exports = params => {
    const { name } = params;
    const query = `SELECT bottles.message
                   FROM bottles
                   INNER JOIN lakes ON bottles.lake_id=lakes.id
                   WHERE lakes.name='${name}'
                   ORDER BY RANDOM()
                   LIMIT 1`;

    return new Promise((resolve, reject) => {
        db.get(query, [], (err, row) => {
            if (err) reject({ error: err });
            resolve(row || { message: 'This lake has no bottle messages' });
        });
    });
};
