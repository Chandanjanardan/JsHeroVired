console.log("hello")
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
    this.root=null
    }
    insert(value){
        const NewNode= new Node(value) 
        if(this.root===null){
            this.root= NewNode;
        }else{
            let curr=this.root
            while(true) {
                if(value>curr.value){
                    if(curr.right===null){
                        curr.right=NewNode
                        break
                    }else{
                        curr=curr.right
                    }
                }else if(value<curr.value){
                    if(curr.left===null){
                        curr.left=NewNode
                        break
                    }else{
                        curr=curr.left
                    }

                }
            }
        }
        
    }
    search (root ,value){
        if(root === null){
                console.log("value not found")
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{

             return this.search(root.right, value)}
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)

        }
    }
    nthMax(root){
        if(!root.right){
            return root.value
        }else{
            return this.nthMax(root.right)
        }
    }
}

const t= new BinarySearchTree()
t.insert(70)
t.insert(60)
t.insert(55)
t.insert(90)
console.log(t) 
console.log(t.search(t.root,70))
console.log(t.search(t.root,150))
t.inOrder(t.root)
t.nthMax()