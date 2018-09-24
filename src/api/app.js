const data = require('./data.json');

const getCards = function () {
    return data.cards;
};

const getPhases = function () {
    return data.cardPhases;
};

module.exports = {
    getCards: getCards(),
    getPhases: getPhases()
};