let banKinh = parseFloat(prompt("Nhập vào bán kính của hình cầu (m):"));

const PI = Math.PI;

let theTich = (4 / 3) * PI * Math.pow(banKinh, 3);
document.writeln(`Thể tích hình cầu: ${theTich.toFixed(2)} m³<br>`);

let dienTichBeMat = 4 * PI * Math.pow(banKinh, 2);
document.writeln(`Diện tích bề mặt: ${dienTichBeMat.toFixed(2)} m²<br>`);

let chuViLonNhat = 2 * PI * banKinh;
document.writeln(`Chu vi lớn nhất: ${chuViLonNhat.toFixed(2)} m<br>`);