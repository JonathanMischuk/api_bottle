const {
    controllers: {
        main,
        getLakes,
        getBottles,
        getRandomBottleMessage,
        getAllLakeData,
        removeBottle,
        addBottle
    }
} = require('.');

module.exports = app => {
    app.get('/', main);
    app.get('/api/lakes/', getLakes);
    app.get('/api/lakes/all/', getAllLakeData);
    app.get('/api/lakes/:name/bottle/', getRandomBottleMessage);
    app.get('/api/bottles/', getBottles);
    app.get('/api/bottles/delete/:id/', removeBottle);
    app.get('/api/bottles/add/', addBottle);
};
