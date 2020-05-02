var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

//x axis
c.fillRect(100,400,750,1);

function drawArray(barArray){
    c.clearRect(0,0,window.innerWidth, window.innerHeight);
    //x axis
    c.fillRect(100,400,750,1);

    for(let i = 0; i < barArray.length; ++i){
        barArray[i].draw();
    
    }
}

