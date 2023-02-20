class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeqe(){
       return  this.items.shift()
    }
    
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
    
}
const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()

