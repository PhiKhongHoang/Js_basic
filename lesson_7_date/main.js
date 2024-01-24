// date

// var date = Date(); // date là chuỗi
// console.log(typeof date);

var date = new Date(); // date là obj
// console.log(typeof date);

var year = date.getFullYear();
var month = date.getMonth() + 1; // trả về từ 0->11
var day = date.getDay();

console.log(`${day} - ${month} - ${year}`);



