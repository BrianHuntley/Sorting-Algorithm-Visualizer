export function mergeSort(arr){
    const animations = [];
    if (arr.length <= 1){
        return arr;
    }
    const auxiliaryArr = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArr, animations);
    return animations;
}

function mergeSortHelper(arr, start, end, auxiliaryArr, animations){
    if(start === end){
        return;
    }
    const middle = Math.floor((start + end) / 2);
    mergeSortHelper(auxiliaryArr, start, middle, arr, animations);
    mergeSortHelper(auxiliaryArr, middle + 1, end, arr, animations);
    merge(arr, start, middle, end, auxiliaryArr, animations);
}

function merge(arr, start, middle, end, auxiliaryArr, animations){
    let k = start;
    let i = start;
    let j = middle + 1;
    while(i <= middle && j <= end){
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxiliaryArr[i] <= auxiliaryArr[j]){
            animations.push([k, auxiliaryArr[i]]);
            arr[k++] = auxiliaryArr[i++];
        }else{
            animations.push([k, auxiliaryArr[j]])
            arr[k++] = auxiliaryArr[j++];
        }
    }
    while(i <= middle){
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArr[i]]);
        arr[k++] = auxiliaryArr[i++];
    }
    while(j <= end){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArr[j]]);
        arr[k++] = auxiliaryArr[j++];
    }
}