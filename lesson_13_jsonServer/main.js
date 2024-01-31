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

var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (courses) {
        console.log(courses);
    })





