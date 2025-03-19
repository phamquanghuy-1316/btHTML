let a = +prompt("Nhập vào cạnh a");
let b = +prompt("Nhập vào cạnh b");
let c = +prompt("Nhập vào cạnh c");

function kiemTraTamGiac(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        let max = Math.max(a, b, c);
        let min1, min2;

        if (max === a) {
            min1 = b;
            min2 = c;
        } else if (max === b) {
            min1 = a;
            min2 = c;
        } else {
            min1 = a;
            min2 = b;
        }

        if (a === b && b === c) {
            document.writeln("Là tam giác đều");
        } else if (a === b || b === c || a === c) {
            document.writeln("Là tam giác cân");
        } else if (Math.pow(min1, 2) + Math.pow(min2, 2) === Math.pow(max, 2)) {
            document.writeln("Là tam giác vuông");
        } else {
            document.writeln("Là tam giác thường");
        }
    } else {
        document.writeln("Ba cạnh không tạo thành tam giác");
    }
}

// Gọi hàm
kiemTraTamGiac(a, b, c);
