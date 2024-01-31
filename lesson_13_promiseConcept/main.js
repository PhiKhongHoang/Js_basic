/*
1. dom event/event listener
2. json
3. fetch
4. dom location
5. local storage
6. session storage
7. coding convention
8. best practices
9. mistakes
10. performance
*/

/**
 * sync (đồng bộ)
 * async (bất đồng bộ)
 * lỗi đau
 * lý thuyết, cách hoạt động
 * thực hành, ví dụ
 */

/**
 * bước 1: new Promise
 * bước 2: executor
 */

// 1. pending
// 2. fulfitled

var promise = new Promise(
    // excutor
    function (resolve, reject) {
        // logic
        // thành công: sesolve()
        // thất bại: reject()

        // resolve([
        //     {
        //         id: 1,
        //         name: 'js'
        //     }
        // ]);

        reject('Co loi!');
    }
);

promise
    .then(function (course) { // khi reslove 
        console.log(course);
    })
    .catch(function (error) { // khi reject 
        console.log(error);
    })
    .finally(function () {
        console.log('Done!');
    });










