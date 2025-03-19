let a=+prompt("Nhập số a");
let b=+prompt("Nhập số b");
let cal=prompt("Nhập vào các phép tính + - * /");
let result;
if(cal === "+"){
    result=a+b;
}else if(cal === "-"){
    result=a-b;
}else if(cal==="*"){
    result=a*b;
}else if(cal === "/"){
    result=a/b;
}
alert(`${a} ${cal} ${b}`+" = "+result);