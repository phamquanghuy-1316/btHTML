let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
let arr=[];
let a;
for(let i=0;i<n;i++){
    a=+prompt(`nhập phần tử thử ${i+1} của mảng`);
    arr[i]=a;
}
if(n==0){
    document.writeln(`Không có ký tự số`);
}
for(let i=0;i<n;i++){
    if(!isNaN(Number(arr[i]))){
        document.writeln(`${arr[i]} `);
    }
}