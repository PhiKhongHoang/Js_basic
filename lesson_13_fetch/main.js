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
 * API (url): application programing interface (cổng giao tiếp giữa các phần mềm) 
*/

/**
 * BE -> API -> fetch -> json/xml
 * -> json.parse -> js types 
 * -> render ra giao dieejn html
 */


var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then(function (response) {
        return response.json();
        // JSON.parse: json -> js types
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.title}</h2>
                <span>${post.body}</span>
            </li>`;
        });
        console.log(htmls);
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    });






