/*
tham số trong hàm
1. tham số?
    - định nghĩa?
    - kiểu dữ liệu?
    - tính private?
    - 1 tham số
    - nhiều tham số

2. truyền tham số
    - 1 tham số
    - nhiều tham số

3. arguments?
    - đối tượng arguments
    - giới thiệu vòng for of
*/

// function writeLog(message) { // mesage là tham số
//     console.log(message); // mesage là tham số
// }
// writeLog('day la 1 dong log!'); // 'day la 1 dong log!' là đối số
// writeLog(123);
// writeLog(['php', 'js', 'java']);

// function writeLog() {
//     console.log(arguments); // arguments là tham số đặc biệt ( chỉ dùng được trong hàm )
// }
// writeLog('hehe', 'haha');

function writeLog() {
    var myString = '';
    for (var param of arguments) { // định nghĩa biến param
        myString += `${param} - `;
    }
    console.log(myString);
}
writeLog('hehe', 'haha');


