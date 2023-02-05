// console.log("frequency")
// function frequency(arr){
//     arr.sort()
//     for ()
// }
const arr=[1,1,1,2,2,2,3]
const count={};
for (const num of arr){
   
    console.log(num)
    count[num]=count[num]?count[num]+1:1;
}
console.log(count);
