const axios=require('axios');

//Get
// [axios.get('https://reqres.in/api/users?page=2')
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// function handleResult(data){
//     console.log(data);
// }

//POST
// axios.post('https://reqres.in/api/users',[{

// name:'chuks',
// job:'Developer',
// },{

//     name:'chuks',
//     job:'Developer'}])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//PUT
axios.put('https://reqres.in/api/users/3',[{

name:'chuks',
job:'Developer',
},])
.then((res)=>console.log(res))
.catch((err)=>console.log(err));






// require('dotenv').config()

// console.log(process.env.SECRET_KEY);
// console.log('hello');

// const person ={
//     age:23,
//     firstName:"chuks",
//     lastName:"ojieh",
//     favColor:"david"
// }

// for (let property in person){
//     console.log(property);
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//      return res.json();
// }).then((data)=>{
//     console.log(data);
// })

// const data={
//     title:"This is title",
//     body:"This is the post body",
//     userId:0
// }

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:"POST",
//     body:JSON.stringify(data),
//     headers:{
//         "content-type":"application/json"
//     }
// }).then(res => res.json()).then(data => console.log(data));

// let fruits = ['apple', 'banana', 'orange', 'grape'];
//  console.log(fruits.indexOf('orange')) // 2 console.log(fruits.indexOf('coco')); // -1

// let fruits = ['apple', 'banana', 'orange'];
// let fruitsString = fruits.join('egg');
// console.log(fruitsString);

// let numbers = [1, 2, 3];
// let squaredNumbers = numbers.map(num => num * num);
//  console.log(squaredNumbers);
//  console.log(numbers); 

//  let fruits = ['apple', 'banana', 'orange']; 
//  fruits.forEach(fruit => console.log(fruit));

// let numbers = [1, 3, 5, 7, 9, 10];
// let hasEvenNumber = numbers.every(num => num % 2 === 0); 
// console.log(hasEvenNumber); // true
 
 
 
 // [1, 4, 9]