class HashTable{
    constructor(){
        this.size= 8;
        this.buckets = new Array(this.size)
    }
    hash(key){
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % this.size; 

        return hash;
    }
    insert(key,value){
        const index = this.hash(key)
        this.bucket[h].push([key,value]);
        return index;
    }
    search(key){
    const h = this.Headers(key)
    if(!this.buckets[h]){
        console.log("out of index")
    }else{
        for (let i of this.buckets[h]){
            if(i[0] === key){
                return i[1]
            }
        }
    }
}

}
const hash =new HashTable(9)
hash.insert("101","Chandan")
hash.insert("102","Kittu")
hash.insert("103","Bipul")
hash.insert("104","Purva")
hash.insert("105","Adi bro")

