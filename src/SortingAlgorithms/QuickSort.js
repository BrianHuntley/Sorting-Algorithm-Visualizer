export function quickSortAnimation(arr){
    const animations = [];
    if (arr.length <= 1){
        return arr;
    }
    console.log(arr);
    quickSort(arr, animations, 0, arr.length-1);
    console.log(arr);
    return animations;
}

function partition(arr, lo, hi){
    let i = lo + 1;
    let j = hi;
    while(i <= j){
        while(i < hi && arr[i] <= arr[lo]){
            ++i;
        }
        while(j > lo && arr[j] >= arr[lo]){
            --j;
        }
        if(j <= i){
            break;
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    if(lo !== j){
        let temp = arr[lo];
        arr[lo] = arr[j];
        arr[j] = temp;
    }
    return j;
}

function quickSort(arr, animations, lo, hi){
    if(lo < hi){
        let p = partition(arr, lo, hi);
        quickSort(arr, animations, lo, p - 1);
        quickSort(arr, animations, p + 1, hi);
    }
}
