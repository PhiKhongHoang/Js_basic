/* 
Array methods: 7 methods dưới đây đều có tham số truyền vào là func
    1. forEach()
    2. every()
    3. some()
    4. find()
    5. filter()
    6. map()
    7. reduce()
*/

var courses = [
    {
        id: 1,
        name: 'js',
        coin: 250
    },
    {
        id: 2,
        name: 'html - css',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'php',
        coin: 400
    },
    {
        id: 5,
        name: 'reactjs',
        coin: 500
    }
];

// courses.forEach(function (course, index) { // lặp qua các đối tượng 
// console.log(index, course);
// }); // call back

// var isFree = courses.every(function (course, index) { // ktra thỏa mãn 1 đk gì đó => trả về boolean 
//     console.log(index);
//     return course.coin === 0;
// }); // call back
// console.log(isFree);

// var isFree = courses.some(function (course, index) { // ktra chỉ cần 1 trường hợp thỏa mãn => trả về boolean 
//     console.log(index);
//     return course.coin === 0;
// }); // call back
// console.log(isFree);

// var course = courses.find(function (course, index) { // trả về 1 phần tử đầu tiên tm đk
//     console.log(index);
//     return course.name === 'js';
// }); // call back
// console.log(course);

// var listCourse = courses.filter(function (course, index) { // trả về all phần tử tm đk
//     // console.log(index);
//     return course.name === 'js';
// }); // call back
// console.log(listCourse);


// example 
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
];
function getMostFavoriteSport(array) {
    return array.filter(function (sport) {
        return sport.like > 5;
    });
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports))
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]







