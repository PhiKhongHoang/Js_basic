// object constructor (bản thiết kế của ngôi nhà)

function User(firstName, lastName, avt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avt = avt;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Phi', 'Khong', 'Avatar');
var user = new User('A', 'B', 'Avatar');

author.title = 'Chia sẻ dạo';
user.comment = 'hihi';

console.log(author.getName());
console.log(user.getName());





