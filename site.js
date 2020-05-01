function generateArray(){
    let arr = Array(15).fill().map(() => Math.round(Math.random() * 25));
    drawArray(arr);
    return arr;
}
