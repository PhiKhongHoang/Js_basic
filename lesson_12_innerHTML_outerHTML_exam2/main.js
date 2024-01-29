/* 
Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

ReactJS
AngularJS
VueJS
Gợi ý:

Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
Note: Tham khảo phương thức join (w3school) hoặc xem lại bài Làm việc với mảng ở chương 7 nhé.
*/

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ul = document.querySelector('ul');
    var newCourses = courses.map(function (course) {
        return `<li>${course}</li>`;
    });
    return ul.innerHTML = newCourses.join(' ');
}


render(courses)





