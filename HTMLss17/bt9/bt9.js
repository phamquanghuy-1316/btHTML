let a= +prompt("nhập vào a");
let b= +prompt("nhập vào b");
let c= +prompt("nhập vào c");
let delta= (Math.pow(b,2)-4*a*c);
let x1= (-b+Math.sqrt(delta))/(2*a);
let x2= (-b-Math.sqrt(delta))/(2*a);
document.writeln("pt:"+ a+"x^2"+b+"x"+c+"= 0 có nghiệm là <br>");
document.writeln("x1= "+ x1 + "<br>");
document.writeln("x2= "+ x2 + "<br>");