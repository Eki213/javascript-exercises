const palindromes = function (str) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = str
        .toLowerCase()
        .split('')
        .filter(char => validChars.includes(char))
        .join('');
    
    return cleanedString.split('').reverse().join('') === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
