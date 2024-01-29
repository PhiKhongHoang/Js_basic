/* Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé.

Gợi ý: Bạn có thể sử dụng forEach lặp qua các phần tử div, nhưng trước hết các bạn phải lấy được danh sách các phần tử div ra nhé. */

var divList = document.querySelectorAll('div');
divList.forEach(element => {
    return element.classList.add('box');
});