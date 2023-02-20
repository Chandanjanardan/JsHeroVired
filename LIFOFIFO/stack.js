// console.log("hello stack")
// class Stack{
//     constructor(){
//         this.element=[]
//     }
//     push   (item){
//         this.element.push(item)
//     }
//     pop(){
//         return this.element.pop();
//     }
//     pushQueue(){
//         return this.element()
//     }
   
//     print(){
//         console.log(this.element.toString())
//     }
// }
// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

class LinkedListUsingStack {
    constructor() {
      this.stack = [];
    }
  
   
    add(value) {
      this.stack.push(value);
    }
  
    
    remove() {
      if (this.stack.length === 0) {
        return null;
      } else {
        return this.stack.pop();
      }
    }
  
   
    size() {
      return this.stack.length;
    }
  
   
    toString() {
      return this.stack.join(' -> ');
    }
  }
  const ll = new LinkedListUsingStack();
ll.add(3);
ll.add(7);
ll.add(1);
console.log(ll.toString()); 


  