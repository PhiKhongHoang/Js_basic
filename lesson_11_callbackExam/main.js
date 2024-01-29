/* 
callback:
    1. là hàm
    2. truyền qua đối số
    3. được gọi lại (trong hàm nhận đối số)
*/
// viết lại hàm map()
Array.prototype.myMap = function (cb) {
    var arrayLength = this.length;
    var arr = [];
    for (var i = 0; i < arrayLength; i++) {
        var result = cb(this[i], i);
        arr.push(result);
    }
    return arr;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})); // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})); // Output: [0, 2, 6]