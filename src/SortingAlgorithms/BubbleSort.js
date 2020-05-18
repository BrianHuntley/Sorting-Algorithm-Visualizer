export function bubbleSortAnimation(arr){
    const animations = [];
    if (arr.length <= 1){
        return arr;
    }
    bubbleSort(arr, arr.length, animations);
    return animations;
}

function bubbleSort(arr, n, animations){
    for(let i = 0; i < n - 1; ++i){
        animations.push([i, i+1]);
        animations.push([i, i+1]);
        if(arr[i] > arr[i + 1]){
            animations.push([i, arr[i+1]]);
            animations.push([i + 1, arr[i]]);
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }else{
            animations.push([-1, -1]);
            animations.push([-1, -1]);
        }
    }
    if(n !== 1){
        bubbleSort(arr, n - 1, animations);
    }
}