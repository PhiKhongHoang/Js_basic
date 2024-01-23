/* 
kiểu mảng (array)
1. tạo mảng
    - cách tạo
    - dùng cách nào? tại sao?
    - kiểm tra data type

2. truy xuất mảng
    - độ dài mảng
    - lấy phần tử theo index
*/

var languages = [
    'js',
    'php',
    'ruby',
    null,
    undefined,
    function() {

    },
    {},
    123,
];
// console.log(languages);

// cách 2:
var languages = new Array(
    'js',
    'php',
    'ruby',
    null,
    undefined,
    function() {

    },
    {},
    123,
);
// console.log(languages);

// => nên dùng cách 1

// console.log(typeof languages);
// console.log(Array.isArray(languages)); // kiểm tra xem phải array không

var languages = [
    'js',
    'php',
    'ruby',
];

console.log(languages.length);
console.log(languages[1]);
console.log(languages[4]); // không có thì trả về undefined



