let P= +prompt("nhập tiền gửi");
let r= +prompt("nhập lãi xuất (%)");
let n= +prompt("nhập số tháng gửi");
let A=P*Math.pow((1+r/100),n);
document.writeln(`tiền lãi là: `,A-P);
document.writeln(`tiền nhận được là: `,A);