const reverse = function (x) {
    let rev = 0;
    while (x != 0) {
        rev = rev * 10 + x % 10;
        x = Math.trunc(x / 10);
    }
    const limit = 0x7FFFFFF;
    if (rev > limit || rev < -limit) return 0;
    return rev;

};

console.log(reverse(1534236469))