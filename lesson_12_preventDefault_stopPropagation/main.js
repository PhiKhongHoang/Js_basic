/*
dom events
    1. preventDefault // hành vi mặc định
    2. stopPropagation // nổi bọt
*/

// var aElevents = document.links;
// for (var i = 0; i < aElevents.length; i++) {
//     aElevents[i].onclick = function (e) {
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function (e) {
//     e.preventDefault();
// }
// ulElement.onclick = function (e) {
//     console.log(e.target);
// }


document.querySelector('div').onclick = function () {
    console.log('DIV');
}

document.querySelector('button').onclick = function (e) {
    e.stopPropagation();
    console.log('Click me!');
}




