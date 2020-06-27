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
    for(let i = 0; i < arr.length; ++i){
        for(let j = i; j > 0 && arr[j] < arr[j-1]; --j){
            animations.push([i, j - 1]);
            animations.push([i, j - 1]);
            
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            if(arr[j-1] < arr[j-2] && j > 1){
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }else{
                animations.push([j, arr[j]]);
                animations.push([j-1, arr[j-1]]);
            }
            
        }
    }
}
