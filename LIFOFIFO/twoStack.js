class Queue{
    constructor(){
        this.insertionStack =[]
        this.deletionStack= []
    }
    enqueue(value){
        this.insertionStack.push(value)
    }
    dequeue(){
        if(this.deletionStack.length===0){
            while(this.insertionStack.length>0){
              let   temp = this.insertionStack.pop()
                this.deletionStack.push(temp)
            }
        }
        return this.deletionStack
    }
    print(){
        console.log(this.insertionStack)
        console.log(this.deletionStack)
    }
}

const queueLL= new Queue()
queueLL.enqueue(1)
queueLL.enqueue(2)
queueLL.enqueue(3)
queueLL.enqueue(4)
queueLL.print()
queueLL.dequeue()
queueLL.print()

// paranthesis problem

function isBalanced(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(str[i]); // if an opening parenthesis is encountered, push it onto the stack
      } else if (str[i] === ')') {
        if (stack.length === 0) { // if the stack is empty (meaning there is no corresponding opening parenthesis), return false
          return false;
        }
        stack.pop(); // otherwise, pop the last opening parenthesis off the stack (since it matches the current closing parenthesis)
      }
    }
    return stack.length === 0; // if the stack is empty after processing all parentheses, the string is balanced
  }

  class Stack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
  
      const val = this.stack.pop();
  
      if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return val;
    }
  
    top() {
      if (this.stack.length === 0) {
        return null;
      }
  
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
  
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // program to find the factorial of a number
function factorial(x) {

  // if number is 0
  if (x == 0) {
      return 1;
  }

  // if number is positive
  else {
      return x * factorial(x - 1);
  }
}

// take input from the user
const num = prompt('Enter a positive number: ');

// calling factorial() if num is positive
if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}
else {
  console.log('Enter a positive number.');
}
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

