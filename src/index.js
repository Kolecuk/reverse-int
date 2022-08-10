module.exports = function reverse(n) {
    const str = Math.abs(n).toString();
    const arr = str.split('');
    const arr2 = arr.map((item, index, array) => {
        return item = array[arr.length - 1 - index];
    });
    const str2 = arr2.join('');
    const res = +str2;
    return res;
}
