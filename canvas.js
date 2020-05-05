var canvas = document.querySelector("canvas");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var c = canvas.getContext("2d");
var centerX = canvas.width/2;
var centerY = canvas.height/2;
//x axis
c.fillRect(centerX - 375, centerY, 750, 1);

function drawArray(barArray){
    c.clearRect(0,0,window.innerWidth, window.innerHeight);
    //x axis
    c.fillRect(centerX - 375, centerY, 750, 1);

    for(let i = 0; i < barArray.length; ++i){
        barArray[i].draw();
    }
}

function animateSwap(bar1, bar2){
    let temp = bar2.x - bar1.x;
    for(let i = 0; i < temp; ++i){
        //clear rectangle
        c.clearRect(bar1.x, bar1.y, 15, 15*-bar1.val);
        //clear text
        c.clearRect(bar1.x, bar1.y+1, 40, 30);
        bar1.x += 1;
        c.clearRect(bar2.x, bar2.y, 15, 15*-bar2.val);
        c.clearRect(bar2.x, bar2.y+1, 40, 30);
        bar2.x -= 1;
        bar1.draw();
        bar2.draw();
    }
}