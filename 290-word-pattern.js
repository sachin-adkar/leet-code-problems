/**
Using object pattern and s as key value pairs
*/

/**Sol-1 */
const wordPatternSol1 = function (pattern, s) {
    const strings = s.split(' ');
    if (pattern.length != strings.length) return false;
    const len = pattern.length;
    const obj = {};
    for (let i = 0; i < len; i++) {
        if (!Object.values(obj).includes(strings[i]))
            obj[pattern[i]] = strings[i];
    }
    for (let i = 0; i < len; i++) {
        if (obj[pattern[i]] != strings[i])
            return false;
    }
    return true;
};

/**
 * sol2
 * to handle inputs like 'abc', 'b c a'
 * const c = 'p_' + pattern[i];
 * const w = 'w_' + strings[i];
 * 
 */
const wordPatternSol2 = function (pattern, s) {
    const strings = s.split(' ');
    if (pattern.length != strings.length) return false;
    const len = pattern.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        const c = 'p_' + pattern[i];
        const w = 'w_' + strings[i];
        if (!map.has(c))
            map.set(c, i);
        if (!map.has(w))
            map.set(w, i);
        if (map.get(c) != map.get(w))
            return false;
    }
    return true;
};