export function insertionSortAnimation(arr){
    const animations = [];
    if(arr.length <= 1){
        return arr;
    }
    insertionSort(arr, animations);
    return animations;
}


//Currently not working, fix later
function insertionSort(arr, animations){
    for(let i = 1; i < arr.length; ++i){
        let key = arr[i];
        let j = i - 1;
        animations.push([i-1, j]);
        animations.push([i-1, j]);
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; 
    }
}
