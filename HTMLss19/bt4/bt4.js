let num=+prompt("nhập vào 1 số");
if(num%3==0 && num %5==0){
    document.writeln(`${num} chia hết cho cả 3 và 5`);
}else{
    document.writeln(`${num} ko chia hết cho cả 3 và 5`);
}