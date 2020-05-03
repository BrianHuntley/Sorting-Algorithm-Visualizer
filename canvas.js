var canvas = document.querySelector("canvas");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var c = canvas.getContext("2d");
var centerX = (canvas.width/2)-375;
var centerY = canvas.height/2;
//x axis
c.fillRect(centerX, centerY, 750, 1);

function drawArray(barArray){
    c.clearRect(0,0,window.innerWidth, window.innerHeight);
    //x axis
    c.fillRect(centerX, centerY, 750, 1);


    for(let i = 0; i < barArray.length; ++i){
        barArray[i].draw();
    
    }
}

