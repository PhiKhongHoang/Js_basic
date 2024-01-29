/**
 * Sử dụng các biến đã cho sẵn dưới đây
 * productsListElement: thẻ div có class là products-list.
 * firstProductElement: thẻ div đầu tiên có class là product.
 * buttonElements: tất cả các thẻ button.
 */

var productsListElement = document.querySelector('.products-list');
console.log(productsListElement);

var firstProductElement = document.getElementsByClassName('product')[0];
console.log(firstProductElement);

var buttonElements = document.getElementsByTagName('button');
console.log(buttonElements);


