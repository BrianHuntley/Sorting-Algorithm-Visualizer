export function insertionSortAnimation(arr){
    const animations = [];
    if(arr.length <= 1){
        return arr;
    }
    insertionSort(arr, animations);
    return animations;
}

function insertionSort(arr, animations){
    for(let i = 0; i < arr.length; ++i){
        for(let j = i; j > 0 && arr[j] < arr[j-1]; --j){
            animations.push([j, j - 1]);
            animations.push([j, j - 1]);
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            animations.push([j, arr[j]]);
            animations.push([j-1, arr[j - 1]]);
        }
    }
}