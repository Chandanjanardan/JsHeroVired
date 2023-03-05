// async function returnFive(){
//     return 5
// }


// returnFive().then((result)=>{
//     console.log(returnFive())
// })

async function f1() {
  //   return 5;
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved");
    }, 2000);
  });

  const anyVar = await prom;
  console.log(anyVar);
}
f1();
console.log(f1().then((res) => console.log(res)));
