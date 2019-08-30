const { db } = require('../../db');

module.exports = querystrings => {
    const { id, message, lake_id } = querystrings;
    const query = `
        INSERT INTO bottles (id, message, lake_id)
        VALUES ('${id}', '${message}', '${lake_id}')
    `;

    return new Promise((resolve, reject) => {
        db.run(query, [], (err, row) => {
            if (err) reject({ error: err });
            resolve({ message: 'successfully added bottle' });
        })
    });
};
