const numWaterBottles = function (numBottles, numExchange) {
    let total = numBottles;
    let remBottles = numBottles;
    while (remBottles >= numExchange) {
        let rem = remBottles % numExchange;
        let div = Math.floor(remBottles / numExchange);
        remBottles = rem + div;
        total += div;
    }
    return total;
};