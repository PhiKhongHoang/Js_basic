/* 
HTML DOM (DOM: document object model)
có 3 thành phần
    1. element
    2. attribute
    3. text 
*/

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<span>Heading</span>';
console.log(boxElement.innerHTML);

boxElement.outerHTML = '<span>Heading</span>'
console.log(boxElement.innerHTML);







