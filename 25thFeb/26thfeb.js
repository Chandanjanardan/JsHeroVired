// console.log("hello ")
// function setTimeout(){
//     console.log("Set time out")
    
// }
// setTimeout(setTimeout,2000)


// console.log("End")

// function notice(name,callback){
//     console.log(`hello ${name}`)
//     callback()
// }

// function greet(){
//     console.log("How are you")
// }
// notice("Chandy",greet)


//  x=40
// function f1(){
//     x= 10; 
//      x= 30;
    
//     console.log(x)
// }
// // f1()
// console.log(x)

// let arrow=(a)=>{
//    a+200
// }
// console.log(arrow(1))

let paddition = (arr) => {
    return new Promise((resolve, reject) => {
      let a = arr[0];
      let b = arr[1];
      if (a < 2 || b < 3) {
        reject("Pass only non negative numbers");
      } else {
        let sum = a + b;
        console.log("Sum is ", sum);
        resolve(arr);
      }
    });
  };
  
  paddition([1, 10])
  .then(result => console.log(result))
  .catch(error => console.log(error))