let a = +prompt("nhập vào a");
let b = +prompt("nhập vào b");
let c = +prompt("nhập vào c");
let delta = (Math.pow(b, 2) - 4 * a * c);
if (delta < 0) {
    document.writeln("pt vô nghiệm");
} else if (delta === 0) {
    let x1 = (-b / (2 * a));
    document.writeln(`pt có nghiệm kép x1 = x2 = ${x1}`)
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.writeln(`pt có 2 nghiệm pb x1 = ${x1} , x2 = ${x2}`);
}