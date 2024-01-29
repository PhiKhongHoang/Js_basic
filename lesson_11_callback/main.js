/* 
callback:
    1. là hàm
    2. truyền qua đối số
    3. được gọi lại (trong hàm nhận đối số)
*/

Array.prototype.map2 = function (callback) {
    //  console.log(this); // this là thằng gọi tới map2
    var output = [];
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = [
    'php',
    'js',
    'ruby',
];

var htmls = courses.map2(function (course, index) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(''));