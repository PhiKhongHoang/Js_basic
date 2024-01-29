/* 
Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
*/

document.querySelector('h1').title = "F8 - Học lập trình để đi làm";

document.querySelector('h1').setAttribute('data-title', 'F8 - Học lập trình để đi làm');

document.querySelector('a').href = "https://fullstack.edu.vn/";

document.querySelector('a').setAttribute('target', '_blank');