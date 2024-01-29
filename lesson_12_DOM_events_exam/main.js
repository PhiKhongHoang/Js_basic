/* 
Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
*/

var buttonEvent = document.querySelector('button');
buttonEvent.onclick = function (e) {
    e.target.style.color = '#fff';
}

