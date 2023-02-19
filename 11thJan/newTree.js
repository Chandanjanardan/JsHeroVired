console.log("hello new tree")
class Node{
    constructor(value){
        this.value= value
        this.left=null
        this.right =null
    }
}
class BinararySearchTree{
    constructor(){
        this.root  =null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const NewNode= new Node(value)
        this.insertNode(this.root,NewNode)
    }
    insertNode(root,)
}