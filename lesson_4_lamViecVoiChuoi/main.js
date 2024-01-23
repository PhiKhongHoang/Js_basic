// làm việc với chuỗi
var myString = 'Phi Hoang Khong';

// 1. length
// console.log(myString.length);

// 2. find index
// console.log(myString.indexOf('Hoang')); // không có thì trả về -1, nếu có thì trả về vị trí đầu tiên tìm được
// console.log(myString.indexOf('Hoang', 6)); // tìm bắt đầu từ vị trí 6
// console.log(myString.lastIndexOf('Hoang')); // tìm lần cuối xuất hiện
// console.log(myString.search('Hoang')); // chỉ tìm được lần đầu xuất hiện

// 3. cut string
// console.log(myString.slice(4, 9)); // start - end
// console.log(myString.slice(4)); // start
// console.log(myString.slice(0)); // start
// console.log(myString.slice(-5, -1)); // start - end

// 4. replace
// console.log(myString.replace('Hoang', 'hihi')); // thay thế 1 lần chuỗi đầu tiên
// console.log(myString.replace(/Hoang/g, 'hihi')); // thay thế tất cả chuỗi

// 5. convert to upper case 
// console.log(myString.toUpperCase(myString)); 

// 6. convert to lower case
// console.log(myString.toLowerCase(myString)); 

// 7. trim 
// console.log(myString.trim()); // bỏ khoảng trắng ở đầu và cuối
// console.log(myString.trim().length); // bỏ khoảng trắng ở đầu và cuối

// 8. split
// var language = 'js, php, java';
// console.log(language.split(', ')); // chuyển string thành array
// var str = 'php';
// console.log(str.split('')); // chuyển string thành mảng chứa từng chữ cái

// 9. get a character by index
// const str = 'phi khong';
// console.log(str.charAt(2)); // lấy kí tự ở vị trí được truyền, trường hợp index không có thì trả về chuỗi rỗng
// console.log(str[2]); // lấy kí tự ở vị trí được truyền, trường hợp index không có thì trả về undefined





