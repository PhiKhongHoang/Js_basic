/* 
chuỗi (string) trong js
1. tạo chuỗi
    - các cách tạo chuỗi
    - nên dùng cách nào? lí do?
    - kiểm tra data type
2. một số case sử dụng backslash (\)
3. xem độ dài chuỗi
4. chú ý độ dài khi viết code
5. template string es6 
*/

// cách 1: dùng 1 cặp nháy đơn or nháy kép
// cách 2: dùng new String()

// => nên dùng cách 1

var fullName = 'phi khong';
var fullName = new String('phi khong');

var fullName = 'my name is \'phi khong\'';

var fullName = '123 45';

// console.log(fullName.length); // độ dài chuỗi

var firstName = 'Phi';
var lastName = 'Khong';

console.log('Toi la: ' + firstName + ' ' + lastName);
console.log(`Toi la: ${firstName} ${lastName}`); // template string es6 










