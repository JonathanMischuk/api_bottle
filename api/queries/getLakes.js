const { db } = require('../../db');

const query = `SELECT * FROM lakes;`

module.exports = () => {
    return new Promise((resolve, reject) => {
        db.all(query, [], (err, rows) => {
            if (err) reject({ error: err });
            resolve(rows);
        });
    });
};
