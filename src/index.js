module.exports = function reverse(n) {
    const str = Math.abs(n).toString();
    const arr = str.split('');
    const arrReverse = arr.reverse()
    const strReverse = arrReverse.join('');
    const res = +strReverse;
    return res;
}
