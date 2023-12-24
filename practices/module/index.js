 
 
//  for of , for in 
//  const names = ["rimon","likhon","ridoy","sakib","bulbul vai"]
//  for(let name of names){
//     console.log(name)                // for of, posible in array
//  }
 
// const students = {
//     Id:101,
//     name:"rimon hossain",            // for in, posible in object
//     age:19
// }
// for(let student in students){
//     console.log(`${student} : ${students[student]}`)
// }


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//  forEach 
// let numbers = [2,4,6,8,10]
// console.log(numbers)
// numbers.forEach((value,index,arr)=>{
//     arr[index] = value + 10;
// })
// console.log(numbers)

// let newNumbers = []
// numbers.forEach((value,index,arr)=>{
//      newNumbers.push(value*value)
// })
// console.log(newNumbers)


// +++++++++++++++++++++++++++++++++++++++++++++
//                         map, 
// let numbers = [2,4,6,8,10]
// let newNumbers = numbers.map((value,index,arr)=>{
//         return value*value
// })
// console.log(newNumbers)
// console.log(numbers)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//                         filter

// map output 
// let numbers = [2,4,6,8,10]
// let newNumbers = numbers.map((value)=>{
//         return value>4
// })
// console.log(newNumbers)
// console.log(numbers)


// filter output 
// let numbers = [2,4,6,8,10]
// let newNumbers = numbers.filter((value)=>{
//         return value>4
// })
// console.log(newNumbers)
// console.log(numbers)


// ++++++++++++++++++++++++++++++++++++++++++++++
// Arrow function (part-1)

// aditional function 
// function display1(){console.log("hello, my name is Rimon hossain 1")}
// display1();

// function display1(){ return "hello, my name is Rimon hossain 1"}
// console.log(display1());

// arrow function
// const display2 = ()=>{console.log("hello, my name is rimon hossain 2")}
// display2()

// return 1 
// const display2 = ()=>{ return "hello, my name is rimon hossain 2"}
// console.log(display2());

// return 2 
// const display2 = ()=> "hello, my name is rimon hossain 2"
// console.log(display2());

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// do while loop 

// let i = 1;
// do{
//     console.log("rimon hossain")
//     i++;
// }while(i<=10)




// let rimon = [1,2,3,4,5,6,7,8]
// let rimons = rimon.filter((r)=>{
//     return r <= 5;
// })
// console.log(rimon);
// console.log(rimons);
//  rimon.map((r,index,arr)=>{arr[index] = r*r})
// console.log(rimon);


// let numbers = [10,15,20,25,30,40]
// numbers.forEach((x)=>{ console.log(x)})
// let newNumber = numbers.map((x)=>{return x-5})
// console.log(newNumber)
// numbers.filter((x)=>{ console.log(x)})
// console.log(numbers);

// let evenNumbers = numbers.find((even)=>{return even===30})
// let evenNumbersIndex = numbers.findIndex((even)=>{return even===30})
// console.log(evenNumbers);
// console.log(evenNumbersIndex);




// let numbers = [1,2,3,4]

// let [num1,num2,num3,num4] = numbers;
// console.log(num1,num2,num3,num4)
// let [num1,num2,...num] = numbers;
// console.log(num1,num2,...num)




// let a=10, b=30;
// [a,b] = [b,a]
// console.log(a)

// let students = {
//     Id:101,
//     name: "rimon hossain",
//     age:18,
//     gpa:4.00,
//     countrys:{
//         native:"bangladesh",
//         others:"india"
//     }
// }

// const {Id,name,age,gpa,countrys} = students
// console.log(Id)
// console.log(name)
// console.log(age)
// console.log(gpa)
// console.log(countrys.native)
// console.log(countrys.others)




// const studentsInfo = ({Id,fullName,languese})=>{
//     console.log(Id,fullName,languese.native,languese.others)
// }

// const student = {
//     Id:101,
//     fullName: "Rimon hossain",
//     languese: {
//         native: "bangla",
//         others: "hindi"
//     }
// }

// studentsInfo(student)









// import {rimon,changed} from "./module.js"

// console.log(rimon)
// changed("Hello everyone , My name is Rimon hossain")
// console.log(rimon)
// import {rimon as rimonHossain} from "./module.js"
// console.log(rimonHossain)




// class, constructor,set,get
// class student {
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
//     set studentName(name){
//         this.name = name;
//     }
//     get studentInfo(){
//         return this.id + " " + this.name
//     }
// }
// const s1 = new student(101,"rimon hossain")
// console.log(s1.id)
// console.log(s1.name)
// s1.studentName = "rimon hosain is changed"
// console.log(s1.name)

// console.log(s1.studentInfo)
// ++++++++++++++++++++++++++++++++++++++++
//Synchronous vs Asynchronous



// const teskOne = () => {
//         console.log("task one is complete")
// }

// const teskTwo = () => {
//     setTimeout(()=>{
//         console.log("task Two is complete. Data was loading")
//     },1000);
// }

// const teskThree = () => {
//     setTimeout(()=>{
//         console.log("task three is complete. Data was loading")
//     },500);
// }

// const teskFour = () => {
//     console.log("task four is complete")
// }

// const teskFive = () => {
//     console.log("task five is complete")
// }


// teskOne()
// teskTwo()
// teskThree()
// teskFour()
// teskFive()


// ++++++++++++++++++++++++++++++++++++++++++++++++++
// callback and higher order function

// const square = (x)=>{
//     console.log(`square of : ${x} = ${x*x}`)
// }
// square(5)
// function d(num,s){
//     s(num)
// }
// d(10,square)


// const teskOne = (t2) => {
//         console.log("task one is complete")
//         t2()
// }

// const teskTwo = (t3) => {
//     setTimeout(()=>{
//         console.log("task Two is complete. Data was loading")
//         t3()
//     },1000);
// }

// const teskThree = (t4) => {
//         console.log("task three is complete. Data was loading")
//         t4()
// }

// const teskFour = (t5) => {
//     console.log("task four is complete")
//     t5()
// }

// const teskFive = () => {
//     console.log("task five is complete")
// }


// teskOne(()=>{
//     teskTwo(()=>{
//             teskThree(()=>{
//                 teskFour(()=>{
//                     teskFive()
//                 })
//             })
//         })
// })



// ++++++++++++++++++++++++++++++++++++++++++++++++
// promise part-1


// const teskOne = (t2) => {
//     console.log("task one is complete")
//     t2()
// }

// const teskTwo = (t3) => {
// setTimeout(()=>{
//     console.log("task Two is complete. Data was loading")
//     t3()
// },1000);
// }

// const teskThree = (t4) => {
//     console.log("task three is complete")
//     t4()
// }

// const teskFour = (t5) => {
// console.log("task four is complete")
// t5()
// }

// const teskFive = () => {
// console.log("task five is complete")
// }


// teskOne(()=>{
//     teskTwo(()=>{
//         teskThree(()=>{
//             teskFour(()=>{
//                 teskFive()
//             })
//         })
//     })
// })


// const promise1 = new Promise((resolve,reject)=>{
//     if(false){
//         resolve("promise1 is completed")
//     }else{
//         reject(new Error("promise is not completed"))
//     }
// })
// promise1.then((response)=>{
//     console.log(response)
// }).catch((err)=>{
//     console.log(err.message)
// })







// const rimon = new Promise((resolve,reject)=>{
//     resolve("Hello Rimon , Promise is completed")
// });
// const ridoy = new Promise((resolve,reject)=>{
//     resolve("hello ridoy, promise is completed")
// });
// // promise all
// Promise.all([rimon,ridoy]).then((allres)=>{
//     console.log(allres)
// })

// // destucture 
// Promise.all([rimon,ridoy]).then(([res1,res2])=>{
//     console.log(res1,res2)
// })



// const rimon = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello Rimon 1 , Promise is completed")
//     },2000)
// });
// const ridoy = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello ridoy 2 , promise is completed")
//     },1000)
// });
// // promise race
// Promise.race([rimon,ridoy]).then((allres)=>{
//     console.log(allres)
// })






// const teskOne = () => {
//     return new Promise((resolve,reject)=>{
//         resolve("task one 1 is complete")
//     })
    
// }

// const teskTwo = () => {
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("task Two 2 is complete. Data was loading")
//        },1000)
//     })

// }

// const teskThree = () => {
//     return new Promise((resolve,reject)=>{
//         resolve("task three 3 is complete")
//     })
// }

// const teskFour = (t5) => {
//     return new Promise((resolve,reject)=>{
//         resolve("task four 4 is complete")
//     })
// }

// const teskFive = () => {
//     return new Promise((resolve,reject)=>{
//         resolve("task five 5 is complete")
//     })
// }
// console.log("hi")
// teskOne()
// .then((res)=>{console.log(res)})
// .then(teskTwo)
// .then((response)=>{console.log(response)})
// .then(teskThree)
// .then((response)=>{console.log(response)})
// .then(teskFour)
// .then((response)=>{console.log(response)})
// .then(teskFive)
// .then((response)=>{console.log(response)})
// .catch((err)=>{console.log(err)});

// console.log("bye")


// Practice

// map,foreach,filter, for in , for Of,


// let numbers = [1,2,3,4,5]
// let num2 = numbers.filter((value,index,arr)=>{
//     return value <= 2;
// })
// console.log(num2)
// console.log(numbers)





//  for of , for in 
//  const names = ["rimon","likhon","ridoy","sakib","bulbul vai"]
//  for(let name of names){
//     console.log(name)                // for of, posible in array
//  }
 
// const students = {
//     Id:101,
//     name:"rimon hossain",            // for in, posible in object
//     age:19
// }
// for(let student in students){
//     console.log(`${student} : ${students[student]}`)
// }





// for of 

// const num1 = [2,4,6,8,10]
// for(let number of num1){
//     console.log(number)
// }



// const students = {
//     student1: {
//         Id:101,
//     name:"Rimon hossain",
//     age:19
//     },
//     student2: {
//         Id:102,
//         name:"ridoy islam",
//         age:19
//     }
// }

// for(let student in students.student1){
//     console.log(students.student1[student])
    
// }
// for(let student in students.student2){
//     console.log(students.student2[student])
    
// }




// module, class ,constructor, set,get,
// import{changed as rimon2} from "./module.js"
// import{rimon as rimon22} from "./module.js"
// rimon2("likhon islam")
// console.log(rimon22)


// class student {
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
//     set studentName(name){
//         this.name = name;
//     }
//     get studentInfo(){
//         return this.id + " " + this.name
//     }
// }
// const s1 = new student(101,"rimon hossain")
// console.log(s1.id)
// console.log(s1.name)
// s1.studentName = "rimon hosain is changed"
// console.log(s1.name)






// syncronus,asyncronus,callback, higherorderfucntion,


     
// const n1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("rimon hossain is very good person.")
//         }, 1000);
//     })
// }
// const n2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("Ridoy is very good person.")
//     })
// }


// n1()
// .then((res)=>{console.log(res)})
// .then(n2)
// .then((res2=>{console.log(res2)}))


// promise, use promise,  all,race,destucture


// const p1 = new Promise((resolve,reject)=>{
//     resolve("rimon hossain megnet")
// })
// p1.then((s)=>{console.log(s)})
// .catch((err)=>{console.log(err)})




