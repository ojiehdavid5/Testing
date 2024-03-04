console.log('hello');

// const person ={
//     age:23,
//     firstName:"chuks",
//     lastName:"ojieh",
//     favColor:"david"
// }

// for (let property in person){
//     console.log(property);
// }

fetch('https://jsonplaceholder.typicode.com/comments')
.then(function(res){
     return res.json();
}).then(function(data){
    console.log(data);
})