/* 
callback:
    1. là hàm
    2. truyền qua đối số
    3. được gọi lại (trong hàm nhận đối số)
*/

Array.prototype.myFilter = function (cb) {
    var output = [];
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }

        }
    }
    return output;
} 