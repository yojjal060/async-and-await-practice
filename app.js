// example 1
// async function fetchUserData(userId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('An error occurred:', error);
//     }
// }

//example 2
// async function f(){
//     return Promise.resolve(1)
// }
// f().then(val => console.log(val))


// example 3 
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1');