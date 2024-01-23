/*
một số hàm built-in (là hàm được js xây dựng sẵn)
    1. alert
    2. console 
    3. confirm 
    4. prompt
    5. set timeout
    6. set interval
*/

// console.log('day la 1 dong log');
// var fullName = 'Khong Hoang Phi';
// console.log(fullName);

// confirm('xac nhan ban du tuoi!');

// prompt('xac nhan ban du tuoi!');

// setTimeout(function() { // cho 1 đoạn code được chạy sau 1 khoảng tgian (ms) (chạy 1 lần)
//     alert('thong bao')
// }, 1000);

setInterval(function() { // cho 1 đoạn code được chạy sau 1 khoảng tgian (ms) (chạy liên tục)
    console.log('day la log!' + Math.random())
}, 1000);




