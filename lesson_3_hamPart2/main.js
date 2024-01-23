/* 
một số điều cần biết về func
1. khi func đặt trùng tên => func trước sẽ bị func sau cùng ghi đè
2. khai báo biến trong hàm
3. định nghĩa hàm trong hàm
*/

function showMessage() {
    function show() {
        console.log('ham trong ham');
    }
    show();
}
showMessage();



