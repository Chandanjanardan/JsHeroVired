class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
  insert(index, value) {
    const newNode = new Node(value);
    let count = 1;
    let currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    currentNode.next;
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return this;
  }

  deleteTail() {
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }
  delhead() {
    this.head = this.head.next;
    this.length--;
  }

  deleteNode(index) {
    let count = 1;
    let currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    currentNode.next = currentNode.next.next;

    // newNode.next = currentNode.next;
    // currentNode.next = newNode;
    this.length--;
    return this;
  }

  print() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr.join(" - ");
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value == key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

let l1 = new LL(29);
l1.append(2);
l1.append(4);

l1.append(3);
l1.append(23);
l1.append(55);
l1.append(11);
l1.insert(2, 445);

// console.log(l1);
console.log(l1.print());

l1.deleteNode();
console.log(l1.print());

console.log(l1.search(100));
console.log(l1.search(11));
