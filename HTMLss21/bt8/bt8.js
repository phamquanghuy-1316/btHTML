let n=+prompt("nhập vào 1 số tự nhiên");
let sum=0,tmp,soBanDau=n;
function Check(n){
    while(n!==0){
        tmp=n%10;
        sum+=Math.pow(tmp,3);
        n= Math.floor(n/10);
    }
    if(sum==soBanDau){
        document.writeln(`${soBanDau} là số Armstrong`);
    }else{
        document.writeln(`${soBanDau} không phải là số Armstrong`);
    }
}
Check(n);