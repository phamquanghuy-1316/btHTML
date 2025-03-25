function check(){
    let numbers = [2,5,9,4,6,3,1];
    let guess = +prompt("đoán 1 số");
    for(let i = 0; i<numbers.length-1; i++){
        if(numbers[i]==guess){
            document.writeln("Bingo");
            return 0;
        }
    }
    document.writeln("chúc bạn may mắn lần sau");
}
check();