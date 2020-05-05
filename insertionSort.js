function insertionSort(arr, n){
    for(let i = 0; i < n; ++i){
        for(let j = i; j > 0 && arr[j].val > arr[j - 1]; --j){
            //swap objects
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            //update positions
            arr[i].pos = i;
            arr[i + 1].pos = i + 1;
            animateSwap(arr[i + 1], arr[i]); 
        }
    }
}