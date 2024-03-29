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

var totalCoin = courses.reduce(function (accumulator, currentValue, carrentIndex, originArray) {
    return accumulator + currentValue.coin;
}, 0); // 0 là giá trị khởi tạo (giá trị khởi tạo có thể là số/chữ.....)
// accumulator là biến lưu trữ. lần đầu sẽ lưu giá trị khởi tạo
// currentValue là giá trị hiện tại
// carrentIndexlà chỉ mục của currentValue
// originArray là array gốc (originArray là courses)

// console.log(totalCoin);


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(array) {
    var totalGold = array.reduce(function (accumulator, currentValue) {
        console.log(accumulator);
        console.log(currentValue.gold);
        console.log(accumulator + currentValue.gold);
        return accumulator + currentValue.gold;
    }, 0);
    return totalGold;
}
// 0 là giá trị khởi tạo (giá trị khởi tạo có thể là số/chữ.....)
// accumulator là biến lưu trữ. lần đầu sẽ lưu giá trị khởi tạo
// currentValue là giá trị hiện tại

// Expected results:
console.log(getTotalGold(sports)) // Output: 23











