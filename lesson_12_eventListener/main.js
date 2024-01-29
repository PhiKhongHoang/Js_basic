/* 
1. dom event/event listener
2. json
3. fetch
4. dom location
5. local storage
6. session storage
7. coding convention
8. best practices
9. mistakes
10. performance

1. xử lí nhiều việc khi 1 event xảy ra
2. lắng nghe / hủy bỏ lắng nghe
*/

var btn = document.getElementById('btn');

// btn.addEventListener('click', function (e) {
//     console.log('event 1');
// });
// btn.addEventListener('click', function (e) {
//     console.log('event 2');
// });
// btn.addEventListener('click', function (e) {
//     console.log('event 3');
// });

function viec1() {
    console.log('viec 1');
}
function viec2() {
    console.log('viec 2');
}
function viec3() {
    console.log('viec 3');
}
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
btn.addEventListener('click', viec3);

setTimeout(() => {
    btn.removeEventListener('click', viec1); // hủy bỏ lắng nghe
}, 3000);





