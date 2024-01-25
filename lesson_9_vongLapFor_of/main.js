
// for/of => lấy ra phần tử 1 mảng or từng chữ cái 1 chuỗi (không dùng được với obj)

var languages = [
    'php',
    'js',
    'c'
];
// for (var value of languages) {
//     console.log(value);
// }


var myInfo = {
    name: 'Phi Khong',
    age: 18
};
for (var value of Object.values(myInfo)) {
    console.log(value);
}






