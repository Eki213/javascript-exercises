const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const currentPersonAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
        const oldestPersonAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;

        return (currentPersonAge > oldestPersonAge) ? currentPerson: oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
