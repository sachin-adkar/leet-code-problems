var hasGroupsSizeX = function (deck) {
    const obj = {};
    const len = deck.length;

    for (let item of deck) {
        !obj[item] && (obj[item] = 0);
        obj[item] += 1;

    }
    const group = Object.values(obj);
    const max = Math.max(...group);
    const divisors = [];
    for (let i = 2; i <= max / 2; i++) {
        let conuter = 0;
        for (let item of group) {
            if (item % i != 0) break;
            conuter++;
        }
        if (conuter == group.length)
            divisors.push(i);
    }
    if (new Set(group).size == 1) return true;
    if (divisors.length) return true;
    return false;
};
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));