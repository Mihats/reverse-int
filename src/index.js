module.exports = function reverse(n) {
    let result;
    n = Math.abs(n);
    n = String(n);
    result = n.split('').reverse().join('')


    return result;
}