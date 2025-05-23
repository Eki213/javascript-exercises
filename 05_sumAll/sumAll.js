const sumAll = function(start, end) {
    if ((start < 0 || end < 0 ) || 
        (!Number.isInteger(start) || !Number.isInteger(end))
    ) return 'ERROR'; 
    if (start > end) [start, end] = [end, start];

    let sum = 0;
    for (;start <= end; start++) sum += start;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
