const { db } = require('../../db');

// not being used just yet...
const query = `
                SELECT name, id,
                (
                    SELECT *
                    FROM bottles
                    WHERE bottles.lake_id=lakes.id
                )
                AS messages
                FROM lakes
                INNER JOIN bottles ON lakes.id=bottles.lake_id
`;

module.exports = () => {
    return new Promise((resolve, reject) => {
        db.all(query, (err, rows) => {
            if (err) reject({ error: err });
            resolve(rows);
        });
    });
};
