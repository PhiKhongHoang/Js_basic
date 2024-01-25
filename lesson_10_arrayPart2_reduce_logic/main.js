Array.prototype.myReduce = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this); // callback() là gọi lại hàm chính nó
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

// tổng mảng
var result = numbers.reduce(function (tatal, number) {
    return tatal + number;
}, 0);
// console.log(result);

var result = numbers.myReduce(function (tatal, number) {
    return tatal + number;
}, 0);
console.log(result);