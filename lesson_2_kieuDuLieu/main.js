/**
 * kiểu dữ liệu trong js
 * 1. kiểu dữ liệu nguyên thủy
 *      - number
 *      - string
 *      - boolean
 *      - undefined
 *      - null
 *      - symbol
 * 2. kiểu dữ liệu phức tạp
 *      - function
 *      - object
 */

// kiểm tra kiểu dữ liệu dùng typeof

// number
var a = 1;
var b = 2;
var c = 1.5;
console.log(typeof a);

// string
var fullName = 'phi khong';
var fullName1 = 'phi\' khong';
var fullName2 = 'phi" khong'; // trong js "" và '' giống nhau
var fullName3 = "phi' khong";
console.log(typeof fullName);

// boolean
var isSuccess = true;
console.log(typeof isSuccess);

// undefined
var age; // khai báo biến mà không gán giá trị thị gọi là undefined
console.log(typeof age);

// null
var isNull = null;
console.log(typeof isNull);

// symbol
var id = Symbol('id'); // unique (tính duy nhất)
var id2 = Symbol('id'); 
console.log(typeof id);
// console.log(id == id2);

// function
var myFunc = function() {
    alert('hello');
}
console.log(typeof myFunc);
// myFunc();

// object
var myObj = {
    name: 'phi khong', // key: value
    age: 18,
    address: 'ha noi',
    myFunc: function() {

    }
};
console.log(typeof myObj);
// console.log('myObjects', myObj);

var myArr = [
    'js', 
    'php', 
    'ruby'
];
console.log(typeof myArr);
// console.log(myArr);







