var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

//x axis
c.fillRect(100,400,750,1);

function drawArray(arr){
    c.clearRect(0,0,window.innerWidth, window.innerHeight);
    //x axis
    c.fillRect(100,400,750,1);

    for(let i = 0; i < arr.length; ++i){
        c.fillRect(100 + 50*i,400,15,10*-arr[i]);
        c.font = "30px Arial"
        c.fillText(arr[i], 100 + 50*i, 430);
    }
}

