function giaiPTBacHai() {
    let a = parseFloat(prompt("Nhập a:"));
    let b = parseFloat(prompt("Nhập b:"));
    let c = parseFloat(prompt("Nhập c:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Vui lòng nhập số hợp lệ.");
        return;
    }

    if (a === 0) {
        if (b === 0) {
            console.log(c === 0 ? "Phương trình có vô số nghiệm." : "Phương trình vô nghiệm.");
        } else {
            console.log("Phương trình có một nghiệm: x =", -c / b);
        }
        return;
    }

    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có hai nghiệm phân biệt: x1 =", x1, ", x2 =", x2);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("Phương trình có nghiệm kép: x =", x);
    } else {
        console.log("Phương trình vô nghiệm.");
    }
}

giaiPTBacHai();
