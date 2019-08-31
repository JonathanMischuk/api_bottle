const { db } = require('../../db');

module.exports = ({ id, message, lake_id }) => {
    const query = `
        INSERT INTO bottles (id, message, lake_id)
        VALUES ('${id}', '${message}', '${lake_id}')
    `;

    return new Promise((resolve, reject) => {
        db.run(query, [], err => {
            if (err) reject({ error: err });
            resolve({ message: 'successfully added bottle' });
        })
    });
};
