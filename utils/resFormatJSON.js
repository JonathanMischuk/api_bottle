module.exports = (res, data) => {
    res.header('Content-Type','application/json');
    res.send(JSON.stringify(data, null, 4));
};
