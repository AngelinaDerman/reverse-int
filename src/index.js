module.exports = function reverse(n) {
    if (n > 0) {
        let str = String(n);
        return Number(str.split("").reverse().join(""));
    }
    else {
        let str = String(n).split("").reverse().join("");
        return Number(str.substring(0, str.length - 1));
    }
}