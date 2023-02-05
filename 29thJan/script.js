function minMax(arr) {
    var min = arr[0],max=arr[0]
    for(i=1;i<arr.length;i++){
      if(min>arr[i]){
          min = arr[i]
      }
      if(max<arr[i]){
          max = arr[i]
      }
    }
    console.log(`Minimumn=${min}  And Maximum = ${max}`)
  
  } 
  
  
  
  arr = [1, 2, 3, 4, 5, 6, 12, 8, 9, 10];
  num = 2;
  minMax(arr)
