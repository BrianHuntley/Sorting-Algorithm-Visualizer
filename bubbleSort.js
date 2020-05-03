function bubbleSort(arr, n){
    for(let i = 0; i < n-1; ++i){
        if(arr[i].val > arr[i + 1].val){
            //swap objects
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            //update positions
            arr[i].pos = i;
            arr[i + 1].pos = i + 1; 
        }
    }
    if(n != 1){
        bubbleSort(arr, --n);
    }else{
        console.log(arr);
        drawArray(arr);
    }
}