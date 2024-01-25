/*
đệ quy:
    1. xác định điểm dừng
    2. logic handle => tạo ra điểm dừng
*/

/* bài toán
input:
    ['a', 'b', 'c', 'b', 'a']
output: (xóa các phần tử trùng lặp)
    ['a', 'b', 'c']
*/

// ============= dùng hàm có sẵn ============
var array = ['a', 'b', 'c', 'b', 'a'];
// console.log(new Set(array)); // set là unique
// console.log([...new Set(array)]); // chuyển set về array


// ============ Đệ quy =================
// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }
// countDown(5);

// function loop(start, end, cb) {
//     if (start < end) {
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }
// var array = ['js', 'php', 'ruby'];
// loop(0, array.length, function (index) {
//     console.log(array[index]);
// });


function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
}
console.log(giaiThua(6)); // 720





