function inUocSo() {
    let n = parseInt(prompt("Nhập một số nguyên:"));

    if (isNaN(n)) {
        document.writeln("Vui lòng nhập một số nguyên hợp lệ.");
        return;
    }

    document.writeln(`Các ước của ${n} là:`);
    for (let i = 1; i <= Math.abs(n); i++) {
        if (n % i === 0) {
            document.writeln(i);
        }
    }
}

inUocSo();
