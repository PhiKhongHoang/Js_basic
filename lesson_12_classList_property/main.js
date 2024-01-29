/*
classlist property
    1. add
    2. contains
    3. remove
    4. toggle
*/

var boxElement = document.querySelector('.box');

// boxElement.classList.add('red');

// console.log(boxElement.classList.contains('red')); // kiểm tra xem 1 element có class nào đó không

// console.log(boxElement.classList.remove('red'));

// console.log(boxElement.classList.toggle('red')); // nếu có class thì xóa còn không có thì thêm

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);






