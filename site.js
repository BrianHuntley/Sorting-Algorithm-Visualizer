function generateArray(){
    return Array(15).fill().map(() => Math.round(Math.random() * 25));
}

function drawArray(arr){
    for(let i = 0; i < arr.length; ++i){
        rect(30 + 10*arr[i],50,15,10*arr[i]);
        
    }
}

