const { db } = require('../../db');

module.exports = params => {
    const { id } = params;
    const query = `DELETE FROM bottles WHERE id='${id}'`;

    return new Promise((resolve, reject) => {
        db.run(query, [], (err, val) => {
            if (err) reject({ error: err });
            resolve({ message: 'successfully removed bottle' });
        })
    });
};
