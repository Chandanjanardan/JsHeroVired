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
