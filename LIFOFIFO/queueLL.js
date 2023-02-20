class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class QueueUsingLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    
    enqueue(value) {
      const newNode = new Node(value);
      if (this.tail === null) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
      this.tail = newNode;
      this.size++;
    }
  
   
    dequeue() {
      if (this.head === null) {
        return null;
      } else {
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head === null) {
          this.tail = null;
        }
        this.size--;
        return value;
      }
    }
  
   
  }
  const queue = new QueueUsingLinkedList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(enqueue()); 


  