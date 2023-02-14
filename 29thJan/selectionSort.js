// console.log("selection sort")
// function swap(x,y,arr){
//     let temp = arr[x]
//     arr[x] = arr[y]
//     arr[y] = temp
// }

// function selectionSort(arr){
//     var i, j, min;
//     for(i=0; i<arr.length; i++){
//         min = i
//         for(j=i+1; j<arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         swap(min,i,arr)
//     }
//     return arr
// }

// const a = [3,5,15,1,45,87,11,100]

// console.log(selectionSort(a))

// bubble sort
// function bubbleSort(arr){
//     for (let i=0;i<arr.length;i++){
//         // console.log(i)
//         for (let j=0;j<arr.length;j++){
//             // console.log(j)
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([3,2,5,6,7,8,11]))

// quicksort

    const quickSOrt =(arr)=>
    {
        if (arr.length <=1) return arr;
        const leftArr=[]
        const rightArr=[]
        const pivot =arr[arr.length-1];
        for (let i=0;i<arr.length;i++){
            
        }
    }