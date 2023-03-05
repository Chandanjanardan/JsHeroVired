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

  function greet(name){
    return `Hi!! ${name} `;
}
  
function greet_name(greeting,message,name){
       console.log(`${greeting(name)} ${message}`);
}
  
greet_name(greet,'Welcome To GeeksForGeeks','JavaScript');

const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error

// Adding a node at the front of the list
function push(new_data)
{
	/* 1. allocate node
	* 2. put in the data */
	let new_Node = new Node(new_data);

	/* 3. Make next of new node as head and previous as NULL */
	new_Node.next = head;
	new_Node.prev = null;

	/* 4. change prev of head node to new node */
	if (head != null)
		head.prev = new_Node;

	/* 5. move the head to point to the new node */
	head = new_Node;
}

// This code is contributed by saurabh_jaiswal.


class CircularQueue {
 constructor(size) {
  this.element = [];
  this.size = size
  this.length = 0
  this.front = 0
  this.back = -1
 }
isEmpty() {
  return (this.length == 0)
 }
enqueue(element) {
  if (this.length >= this.size) throw (new Error("Maximum length exceeded"))
  this.back++
   this.element[this.back % this.size] = element
  this.length++
 }
dequeue() {
  if (this.isEmpty()) throw (new Error("No elements in the queue"))
  const value = this.getFront()
  this.element[this.front % this.size] = null
  this.front++
  this.length--
  return value
 }
getFront() {
  if (this.isEmpty()) throw (new Error("No elements in the queue"))
  return this.element[this.front % this.size]
 }
clear() {
  this.element = new Array()
  this.length = 0
  this.back = 0
  this.front = -1
 }
}