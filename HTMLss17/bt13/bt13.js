let money = +prompt("Nhập vào một số tiềnền:");
let month = +prompt("Nhập vào số tháng gửi:");
let lai1thang = (4.3 / 100)/12;
let tienlai = money*month*lai1thang;
document.writeln(`Số tiền lãi nhận được sau ${month} tháng là: ${tienlai.toFixed(2)} VNĐ`);