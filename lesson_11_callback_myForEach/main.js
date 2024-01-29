/* 
callback:
    1. là hàm
    2. truyền qua đối số
    3. được gọi lại (trong hàm nhận đối số)
*/

var courses = [
    'php',
    'js',
    'ruby',
];
var output = courses.forEach(function (course, index, array) {
    console.log(course, index, array);
});

console.log(output);