let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
let arr=[];
let a,count=0;
for(let i=0;i<n;i++){
    a=+prompt(`nhập phần tử thử ${i+1} của mảng`);
    arr[i]=a;
}
for(let i=0;i<n;i++){
    if(arr[i]>10){
        document.writeln(arr[i]);
    }
}
if(count==0){
    document.writeln("Không có số nào lớn hơn 10");
}