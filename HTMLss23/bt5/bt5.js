let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
let arr = [];
let a, sum = 0;
for (let i = 0; i < n; i++) {
    a = +prompt(`nhập phần tử thử ${i + 1} của mảng`);
    arr[i] = a;
}
if (n == 0) {
    document.writeln(`Không có ký tự số`);
}
for (let i = 0; i < n; i++) {
    if (!isNaN(Number(arr[i]))) {
        sum += arr[i]
    }
}
if (n < 0) {
    document.writeln(`Số lượng phần tử không được âm`);
} else if (n == 0) {
    document.writeln(`Mảng không có phần tử`);
} else {
    if (sum != 0) {
        document.writeln(sum);
    } else {
        document.writeln(`Không có phần tử nào là số`);
    }
}


