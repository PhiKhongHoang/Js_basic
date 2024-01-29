/*
dom events
    1. input/select
    2. key up/down
*/
// var inputValue;

// var inputElement = document.querySelector('input[type="text"]');
// console.log(inputElement);

// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// }

// inputElement.oninput = function (e) {
//     inputValue = e.target.value;
// }


// var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function (e) {
//     console.log(e.target.checked);
// }


// var inputElement = document.querySelector('select');
// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// }


var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeydown = function (e) {
//     console.log(e.target.value);
//     // console.log(e);
// }
inputElement.onkeyup = function (e) {
    // console.log(e.target.value);
    // console.log(e);
    console.log(e.which);
}



