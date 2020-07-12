export function quickSortAnimation(arr){
    const animations = [];
    if (arr.length <= 1){
        return arr;
    }
    console.log("arr len", arr.length);
    quickSort(arr, animations, 0, arr.length);
    console.log(arr);
    return animations;
}

function partition(arr, lo, hi){
    console.log(lo);
    console.log(hi);
    let i = lo + 1;
    let j = hi;
    while(i <= j){
        while(i < hi && arr[i] <= arr[lo]){
            ++i;
            console.log("inf loop 1?");
        }
        while(j > lo && arr[j] >= arr[lo]){
            --j;
            console.log("inf loop 2?");

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
        console.log("p", p);
        console.log("passed partitioning");
        quickSort(arr, animations, lo, p-1);
        console.log("passes first qickssort call");
        quickSort(arr, animations, p+1, hi);
        console.log("passes second quicksort call");
    }
}