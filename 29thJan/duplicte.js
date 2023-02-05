console.log("duplicate")
function removeDuplicates(){
 var arr=[7,1,1,2,3,3,4,5,6,6]
 var ans=[]
    arr.sort();
    ans.push(arr[0])

    for (var i=1; i<=arr.length-1;i++){
        if(arr[i]===arr[i-1]){
            continue
        }else{
            ans.push(arr[i])
        }
    }
    console.log(ans)
    
}
removeDuplicates()