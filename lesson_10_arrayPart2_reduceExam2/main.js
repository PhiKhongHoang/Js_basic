
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(array) {
    var objects = array.reduce(function (obj, value) {
        obj[value[0]] = value[1];
        return obj;
    }, {});
    return objects;
}


console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
