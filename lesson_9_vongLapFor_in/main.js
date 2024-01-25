
// for/in => dùng lấy key của đối tượng

var myInfo = {
    name: 'Phi Khong',
    age: 18,
    address: 'HN',
};
// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

var languages = [
    'js',
    'php',
    'java',
];
// for (var key in languages) {
//     console.log(languages[key]);
// }

var myString = 'javascript';
// for (var key in myString) {
//     console.log(myString[key]);
// }

// ==========================================
function run(object) {
    var array = [];
    for (var key in object) {
        array.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return array;
}
// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }))

