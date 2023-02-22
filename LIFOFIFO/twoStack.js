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
