const fibonacci = function(num) {
    if (+num == 0) return 0;
    if (+num < 0) return 'OOPS';

    let firstPrev = 1;
    let lastPrev = 1;
    let current = 1;

    for (let i = 2; i < num; i++) {
        current = firstPrev + lastPrev;
        lastPrev = firstPrev;
        firstPrev = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
