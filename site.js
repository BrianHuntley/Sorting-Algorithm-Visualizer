function Bar(val, pos){
    this.val = val;
    this.pos = pos;
    this.x  = (centerX-375) + 50*this.pos;
    this.y = centerY;

    this.draw = function(){
        this.x = (centerX-375) + 50*this.pos;
        c.fillRect(this.x, this.y, 15, 15*-this.val);
        c.font = "30px Arial"
        c.fillText(this.val, this.x, this.y + 30);
    }
}

function generateArray(){
    var barArray = [];
    for(let i = 0; i < 15; ++i){
        var val = Math.ceil(Math.random()* 25);
        barArray.push(new Bar(val,i));
    }
    drawArray(barArray);
    return barArray;
}