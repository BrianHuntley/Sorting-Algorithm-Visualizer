export function insertionSortAnimation(arr){
    const animations = [];
    if(arr.length <= 1){
        return arr;
    }
    insertionSort(arr, animations);
    return animations;
}

function insertionSort(arr, animations){
    for(let i = 1; i < arr.length; ++i){
        let key = arr[i];
        let j = i - 1;
        animations.push(["firstCompare", j, i]);
        animations.push(["secondCompare", j, i]);
        while(j >= 0 && arr[j] > key){
            animations.push(["insert", j+1, arr[j]]);
            arr[j+1] = arr[j];
            j = j - 1;
            if(j >= 0){
                animations.push(["firstCompare", j, i]);
                animations.push(["secondCompare", j, i]);
            }
        }
        animations.push(["insert", j+1, key]);
        arr[j + 1] = key; 
    }
}
