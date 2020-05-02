function Bar(val, pos){
    this.val = val;
    this.pos = pos;

    this.draw = function(){
        c.fillRect(100 + 50*this.pos,400,15,15*-this.val);
        c.font = "30px Arial"
        c.fillText(this.val, 100 + 50*this.pos, 430);
    }
}

function generateArray(){
    var barArray = [];
    for(let i = 0; i < 15; ++i){
        var val = Math.round(Math.random()* 24)+1;
        console.log(val);
        barArray.push(new Bar(val,i));
    }
    console.log(barArray);
    drawArray(barArray);
    return arr;
}
