// hiểu hơn về câu lệnh điều kiện và phép so sánh

var a = 1;
var b = 2;
// if(a < b){
//     console.log('a < b');
// } else {
//     console.log('a > b');
// }

/*
&&: kiểm tra từ trái qua phải
    - nếu có 1 giá trị LÀ 1 trong 6 trường hợp false thì trả về false luôn
    - nếu không có giá trị nào là false thì sẽ trả về vế cuối cùng
*/
var result = 'a' && 'b' && 'c';
console.log(result);

var result = null && 'b' && 'c';
console.log(result);


/*
||: kiểm tra từ trái qua phải
    - nếu có 1 giá trị KHÁC 1 trong 6 trường hợp false thì trả về giá trị đó luôn
    - nếu không trả về giá trị cuối cùng
*/
var result = 'a' || 'b' || 'c';
console.log(result);

var result = 'a' || null || 'c';
console.log(result);

var result = null || 'b' || 'c';
console.log(result);

var result = null || 0 || [];
console.log(result);
