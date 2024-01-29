/* 
dom events
    1. attribute events
    2. assign event using the element node
*/

var h1Elements = document.querySelectorAll('h1');

for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].onclick = function (e) {
        console.log(e.target);
    }
}

