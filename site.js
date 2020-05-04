function Bar(val, pos){
    this.val = val;
    this.pos = pos;

    this.draw = function(){
        c.fillRect(centerX + 50*this.pos, centerY, 15, 15*-this.val);
        c.font = "30px Arial"
        c.fillText(this.val, centerX + 50*this.pos, centerY + 30);
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
