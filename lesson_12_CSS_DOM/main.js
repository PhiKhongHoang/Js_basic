// dom style

var boxElement = document.querySelector('.box');
console.log(boxElement);

// boxElement.style.width = '50px';
// boxElement.style.height = '50px';
// boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width: '50px',
    height: '100px',
    backgroundColor: 'red',
});


