function generateArray(){
    let arr = Array(15).fill().map(() => Math.round(Math.random() * 25));
    drawArray(arr);
    return arr;
}

function drawArray(arr){
    var c = canvas.getContext("2d");
    //y axis
    c.fillRect(100,400,1,-300);
    //x axis
    c.fillRect(100,400,750,1);
    for(let i = 0; i < arr.length; ++i){
        c.fillRect(100 + 50*i,400,15,10*-arr[i]);
    }
}