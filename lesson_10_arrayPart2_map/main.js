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

var newCourses = courses.map(function (course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        // originArray: originArray, // tham số thứ 3 ít khi được dùng
    };
});
console.log(newCourses);





