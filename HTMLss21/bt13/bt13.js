//hình a
document.writeln("a. <br>");
for(let i=0; i<10; i++){
    for(let j=10-i;j>0;j--){
        document.writeln("*");
    }
    document.writeln("<br>");
}
document.writeln("<br>");
//hình b
document.writeln("b. <br>");
for(let i=0; i<10; i++){
    for(let j=i+1;j>0;j--){
        document.writeln("*");
    }
    document.writeln("<br>");
}

let n = 10; // Số dòng
//hình c
document.writeln("b. <br>");
for (let i = 0; i < n; i++) {
    // In khoảng trắng để căn phải
    for (let j = 0; j < n - i - 1; j++) {
        document.writeln("&nbsp;&nbsp;"); // Dùng khoảng trắng HTML
    }
    // In dấu *
    for (let j = 0; j < i + 1; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}


//hình d
document.writeln("b. <br>");
for (let i = 0; i < n; i++) {
    // In khoảng trắng để đẩy dấu * sang phải
    for (let j = 0; j < i; j++) {
        document.writeln("&nbsp;&nbsp;"); // Khoảng trắng HTML
    }
    // In dấu *
    for (let j=10-i;j>0;j--) {
        document.writeln("*");
    }
    document.writeln("<br>");
}
