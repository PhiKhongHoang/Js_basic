/**
 * các loại hàm
 * 1. declaration function
 * 2. expression function
 * 3. arrow function
 */

function showMessage() { // declaration function (func phải có tên)
    
}

var showMessage2 = function() { // expression function (func được gán cho biến)

}

setTimeout(function(){ // expression function

});

var myObj = {
    myFunc: function() { // expression function
        
    }
}

// ================================
showMessage(); // declaration function:  có thể gọi trước khi định nghĩa

function showMessage() { // declaration function (func phải có tên)
    console.log('declaration function');
}

var showMessage2 = function() { // expression function (func được gán cho biến)
    console.log('expression function');
}


