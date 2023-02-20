class StackLL{
    constructor(value){
        this.head = {value:value,next:null};
        this.tail=this.head
        this.length = 1
    }
    add (value){
        const newNode = new Node();
        if(this.head === null){
            this.head = this.tail= value
        }
        else{
            temp = this.head;
            this.head = newNode;
            this.head.next=temp;

        }
        this.length++;
        return this;
    }
    remove(){
        let temp ;
        if (this.head === null){
            return null
        }else{
             temp= this.head
             this.head = this.head.next
        }
        this.length++
        return
    }
}