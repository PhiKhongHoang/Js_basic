/* 
object prototype (nguyên liệu tạo nên ngôi nhà)
1. prototype là gì?
2. sử dụng khi nào?
*/

function User(firstName, lastName, avt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avt = avt;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'VN'; // prototype: thêm thuộc tính, phương thức ở ngoài hàm tạo
User.prototype.getClassName = function() {
    return this.className;
}

var author = new User('Phi', 'Khong', 'Avatar');
var user = new User('A', 'B', 'Avatar');

author.title = 'Chia sẻ dạo';
user.comment = 'hihi';

console.log(author.className);
console.log(user.getClassName());










