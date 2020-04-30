function bubbleSort(arr, n){
    for(let i = 0; i < n; ++i){
        if(arr[i] > arr[i + 1]){
            arr[i] = arr[i] ^ arr[i + 1];
            arr[i + 1] = arr[i] ^ arr[i + 1];
            arr[i] = arr[i] ^ arr[i + 1];
        }
    }
    if(n != 1){
        bubbleSort(arr, --n);
    }else{
        return arr;
    }
}