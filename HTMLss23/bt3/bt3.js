let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
let arr=[];
let a,count=0
for(let i=0;i<n;i++){
    a=+prompt(`nhập phần tử thử ${i+1} của mảng`);
    arr[i]=a;
}
for(let i=0;i<n;i++){
    if(arr[i]<0){
        count++;
    }
}
document.writeln(`arr =`, arr, '<br>');
if(n==0){
    document.writeln(`Mảng không có phần tử \n`);
}else if(n<0){
    document.writeln(`Số lượng không hợp lệ`);
}else{
    document.writeln(count);
}