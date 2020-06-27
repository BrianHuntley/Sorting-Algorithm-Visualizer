export function quickSortAnimation(arr){
    const animations = [];
    if (arr.length <= 1){
        return arr;
    }
    quickSort(arr, animations);
    return animations;
}

function quickSort(arr, animations){
    
}