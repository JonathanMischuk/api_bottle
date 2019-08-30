const bodyParser = require('body-parser');

const { createSchema } = require('./db');

module.exports = app => {
    app.use(bodyParser.json());

    let schemaPromise;

    app.use(async (req, res, next) => {
        if (!schemaPromise) schemaPromise = createSchema();
        await schemaPromise;

        next();
    });
};
