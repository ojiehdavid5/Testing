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

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
     return res.json();
}).then((data)=>{
    console.log(data);
})

const data={
    title:"This is title",
    body:"This is the post body",
    userId:0
}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json"
    }
}).then(res => res.json()).then(data => console.log(data));
