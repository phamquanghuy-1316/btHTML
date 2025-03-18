let banKinh = parseFloat(prompt("Nhập vào bán kính (m):"));
let chieuCao = parseFloat(prompt("Nhập vào chiều cao (m):"));

const PI = Math.PI;

let dienTichXungQuanh = 2 * PI * banKinh * chieuCao;
document.writeln(`Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)} m²<br>`);

let dienTichToanPhan = 2 * PI * banKinh * (banKinh + chieuCao);
document.writeln(`Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)} m²<br>`);

let theTich = PI * Math.pow(banKinh, 2) * chieuCao;
document.writeln(`Thể tích hình trụ: ${theTich.toFixed(2)} m³<br>`);

let chuViDay = 2 * PI * banKinh;
document.writeln(`Chu vi đáy: ${chuViDay.toFixed(2)} m<br>`);