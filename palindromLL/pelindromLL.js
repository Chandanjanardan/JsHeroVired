function isPalindrome(head) {
  let values = [];
  let node = head;
  while (node) {
    values.push(node.value);
    node = node.next;
  }
  let reversed = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    reversed.append(values[i]);
  }
  node = head;
  let reversedNode = reversed.head;
  while (node) {
    if (node.value !== reversedNode.value) {
      return false;
    }
    node = node.next;
    reversedNode = reversedNode.next;
  }
  return true;
}
