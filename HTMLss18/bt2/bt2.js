let toan = +prompt("nhập điểm toán");
let van = +prompt("nhập điểm văn");
let anh = +prompt("nhập điểm anh");
let avr = (toan+van+anh)/3;

console.log("điểm trung bình: "+avr);

if(avr >= 8.0){
    document.writeln("Giỏi");
} else if(avr >= 6.5 && avr <= 7.9){
    document.writeln("Khá");
} else if(avr >= 5.0 && avr <= 6.4){
    document.writeln("Trung Bình");
} else {
    document.writeln("Yếu");
}
