// object

var myInfo = {
    name: 'phi khong hoang', // key: value
    age: 18,
    address: 'Ha Noi',
    getName: function() {
        return this.name;
    }
};

// myInfo.email = 'phihoangkhong@gmail.com';
// myInfo['my-email'] = 'phihoangkhong@gmail.com'; // thêm kí tự đặc biệt làm key

// console.log(myInfo.name);
// console.log(myInfo['name']);\

// var keyName = 'name';
// console.log(myInfo[keyName]);

// delete myInfo.age; // xóa age

// console.log(myInfo.getName());

/*
cách gọi tên key:
    - function: phương thức / method (dữ liệu phải gọi mới lấy ra được)
    - others: thuộc tính / property (dữ liệu có thể lấy ra trực tiếp)
*/







