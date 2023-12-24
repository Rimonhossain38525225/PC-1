// callback ,

// const t1 = (callbackt2)=>{
//     console.log("task 1")
//     callbackt2()
// }
// const t2 = (callbackt3)=>{
//     setTimeout(() => {
//         console.log("task 2")
//         callbackt3()
//     }, 1000);
// }
// const t3 = (callbackt4)=>{
//     console.log("task 3")
//     callbackt4()
// }
// const t4 = (callbackt5)=>{
//     console.log("task 4")
//     callbackt5()
// }
// const t5 = ()=>{
//     console.log("task 5")
// }
// t1(()=>{
//     t2(()=>{
//         t3(()=>{
//             t4(()=>{
//                 t5()
//             })
//         })
//     })
// })


// promise 
// const t1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 1")
//     })
// }
// const t2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("task 2 , data load have  completed,")
//         }, 1000);
//     })
    
// }
// const t3 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 3")
//     })
// }
// const t4 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 4")
//     })
// }
// const t5 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 5")
//     })
// }
// t1()
// .then((res1)=>{console.log(res1)})
// .then(t2)
// .then((res2)=>{console.log(res2)})
// .then(t3)
// .then((res3)=>{console.log(res3)})
// .then(t4)
// .then((res4)=>{console.log(res4)})
// .then(t5)
// .then((res5)=>{console.log(res5)})
// .catch((error)=>{console.log(error)});

// async await 
// const t1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 1");
//     })
// }
// const t2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("task 2 , data load have completed,")
//         }, 1000);
//     })
    
// }
// const t3 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 3");
//     })
// }
// const t4 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 4");
//     })
// }
// const t5 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("task 5");
//     })
// }

// const callAllTask = async ()=>{
//     try{
//         let task1 = await t1();
//     console.log(task1);
//     let task2 = await t2();
//     console.log(task2);
//     let task3 = await t3();
//     console.log(task3);
//     let task4 = await t4();
//     console.log(task4);
//     let task5 = await t5();
//     console.log(task5);
//     }catch(error){
//         console.log(error)
//     }
// }
// callAllTask();
















// api ----> XMLHttpRequest


// const makeRequest = (method,url)=>{
//     const xhr = new XMLHttpRequest();
//     xhr.open(method,url);

//     xhr.onload = ()=>{
//         let getAllDeta = xhr.response;
//         console.log(JSON.parse(getAllDeta))
//     }

//     xhr.onerror = ()=>{
//         console.log("Error is here, thik koro error")
//     }

//     xhr.send();
// }


// const getData = ()=>{
//     makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
// }

// getData()






// const makeRequest = (method,url,data)=>{
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open(method,url,data)
//         xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
//         xhr.onload = ()=> {
//             let value = xhr.response
//             // console.log(xhr.responseType)
//             // console.log(xhr.responseURL)
//             // console.log(xhr.responseText)
//             console.log(JSON.parse(value))
//         }
//         xhr.onerror = (err)=> {
//             console.log("Hello error is here, Please fixed this")
//         }
//         xhr.send(JSON.stringify(data))
//     })
// }

// const getAllDeta = ()=> {
//     makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
//     .then((getdeta)=>{console.log(getdeta)})
//     .catch((err)=>{console.log(err)});
// }
// getAllDeta()


// const getAllDeta = ()=> {
//     makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
// }
// getAllDeta()


// const sendData = ()=> {
//     makeRequest("POST","https://jsonplaceholder.typicode.com/posts",{
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     })
// }
// sendData()


// const updateData = ()=> {
//     makeRequest("PUT","https://jsonplaceholder.typicode.com/posts/1",{
//         id: 1,
//         title: 'fooma',
//         body: 'barma',
//         userId: 1
//     })
// }
// updateData()


// const updateSingleData = ()=> {
//     makeRequest("PATCH","https://jsonplaceholder.typicode.com/posts/1",{
//         title: 'foomaaaaaaaaaaaaaaaa',
//     })
// }
// updateSingleData()



// const deleteData = ()=> {
//     makeRequest("DELETE","https://jsonplaceholder.typicode.com/posts/1")
// }
// deleteData()

// calling api from javascript | fetch---> method api

// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

// example
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// GET ALL data api  with error hendle

// fetch('https://jsonplaceholder.typicode.com/posts/5')
// .then((res1)=>{
//     if(!res1.ok){
//         const errorMessage = `Error is : ${res1.status}`
//         throw new Error(errorMessage)
//     }else{
//        return res1.json()
//     }
// })
// .then((res2)=>console.log(res2))
// .catch((err)=>console.log(err));

// POST  = upload a data with error hendle
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Rimon hossain',
//     body: 'Rimon hossain megnet',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//     if(!response.ok){
//         const errorMessage = `Error is : ${response.status}`
//         throw new Error(errorMessage)
//     }else{
//        return response.json()
//     }
// })
//   .then((json) => console.log(json))
//   .catch((err)=>console.log(err));



// PUT updeting a data  with error hendle
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'fdfdfdffdfdffd',
//     body: 'badfdfdfdfdfdfdfdfdfdr',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//     if(!response.ok){
//         const errorMessage = `Error is : ${response.status}`
//         throw new Error(errorMessage)
//     }else{
//        return response.json()
//     }
// })
//   .then((json) => console.log(json))
//   .catch((err)=>console.log(err));



// PATCH updeting a single data  with error hendle
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     body: JSON.stringify({
//         title:'This is changed'
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((response)=> {
//     if(!response.ok){
//         const errorMessage = `Error is : ${response.status}`
//         console.log(errorMessage)
//     }else{
//         return response.json()
//     }
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));


//DELETE
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'DELETE',
// })
// .then((response)=> {
//     if(!response.ok){
//         const errorMessage = `Error is : ${response.status}`
//         console.log(errorMessage)
//     }else{
//         return response.json()
//     }
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));






// const makeRequest = async (url,config)=>{
//     const response = await fetch(url,config)
//     if(!response.ok){
//         const errorMessage = `Error is : ${response.status}`
//         throw new Error(errorMessage)
//     }else{
//         return response.json();
//     }
    
// }


// // DELETE 
// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'DELETE',
//     })
//     .then((getData1)=>{console.log(getData1)})
//     .catch((err)=>{console.log(err)})
// }

// sendData()


// PATCH 
// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PATCH',
//         body: JSON.stringify({
//             title: 'Rimon hossain  title changed',
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((getData1)=>{console.log(getData1)})
//     .catch((err)=>{console.log(err)})
// }

// sendData()


// PUT 
// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PUT',
//         body: JSON.stringify({
//             id:1,
//             title: 'Rimon hossain',
//             body: 'Rimon hossain megnet',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((getData1)=>{console.log(getData1)})
//     .catch((err)=>{console.log(err)})
// }

// sendData()

// PST deta 
// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Rimon hossain',
//             body: 'Rimon hossain megnet',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((getData1)=>{console.log(getData1)})
//     .catch((err)=>{console.log(err)})
// }

// sendData()

// get all deta  with async await
// const getData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((getData1)=>{console.log(getData1)})
//     .catch((err)=>{console.log(err)})
// }

// getData()



//l 85 : calling api from javascript | axios api