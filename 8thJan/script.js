// var arr1=[1,3,4,5,67,89]
// console.log(arr1[0])//1
// console.log(arr1[3])//
// console.log(arr1[arr1.length-1])
// var arr2 = new Array(45,67,89,90)
// console.log(arr2)
// console.log(typeof(arr2))
// for(var i=0;i<arr1.length;i++){
//     console.log(arr1[i])
// }
// console.log("*********************")
// for (var i in arr2){
//     console.log(arr2[i])
// }

// //adding values
// arr1.push(100)
// arr1.unshift(200)
// // for (var i of arr2){
// //     console.log(i)
// // }
// console.log(arr1)
// arr1.pop()
// arr1.shift()
// console.log("*******************")
// console.log(arr1)
// arr1.splice(0,2)
// console.log(arr1)
// arr1.splice(3,0,1000,2000)
// console.log(arr1)
// // =-------------------------------------------------------------------------
// str="heroVired"
// arr=str.split("")
// console.log(arr)
// arr.splice(4)
// console.log(arr)
// arr.push("X")
// console.log(arr)
// newStr=arr.join("")
// console.log(newStr)

// concat many array--------------------------------------------------------------

// searching in array------------------------------
// index of
// arr=[2,4,2,5,6]
// console.log(arr.indexOf(2))
// // ----------------------------------------------
// //merging 2 arrays
// var arr5 =[2,3,4,5,6,7]
// var arr6 = [10,20,30,20 ,40]
// var arr7=arr5.concat(arr6)
// //concat is a non destructive method
// console.log(arr7)
// console.log(arr5)



// //searching in an array
// //indexOf method returns int value
// console.log(arr6.indexOf(20))
// console.log(arr6.lastIndexOf(20))
// console.log(arr6.indexOf(201)); // if not found will return -1 


// //includes
// console.log(arr6.includes(20,30))
// // first index what to search and 2nd index starting index


// //find returns only the first value
// var ans3 = arr6.find(function (el){
//   return el>20;
// })
// console.log(ans3) //30

// //filter //provides all the values according to the condition in form of array
// var ans4 = arr6.filter(function (el) {
//   return el > 20;
// });
// console.log(ans4); //[30,40]
// ------------------------------------------------
var number=[1,2,3,4,5]
var result=number.map((square)=>{
    return square*square
})
console.log(result)
console.log("hello")

console.log("hello kittu")

