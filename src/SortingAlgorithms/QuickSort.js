export function quickSortAnimation(arr){
    const animations = [];
    if (arr.length <= 1){
        return arr;
    }
    quickSort(arr, animations, 0, arr.length-1);
    return animations;
}

function partition(arr, animations, lo, hi){
    let i = lo + 1;
    let j = hi;
    while(i <= j){
        animations.push(["pivot", lo, i]);
        animations.push(["compare", lo, i]);
        animations.push(["pivot", lo, j]);
        animations.push(["compare", lo, j]);
        while(i < hi && arr[i] <= arr[lo]){  
            ++i;
        }
        while(j > lo && arr[j] >= arr[lo]){
            --j;
        }
        if(j <= i){
            break;
        }
        animations.push(["swap", i, arr[j]]);
        animations.push(["swap", j, arr[i]]);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    if(lo !== j){
        animations.push(["swap", lo, arr[j]]);
        animations.push(["swap", j, arr[lo]]);
        let temp = arr[lo];
        arr[lo] = arr[j];
        arr[j] = temp;
    }
    return j;
}

function quickSort(arr, animations, lo, hi){
    if(lo < hi){
        let p = partition(arr, animations, lo, hi);
        quickSort(arr, animations, lo, p - 1);
        quickSort(arr, animations, p + 1, hi);
    }
}
