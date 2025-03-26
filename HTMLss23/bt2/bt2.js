let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
let arr=[];
let a
for(let i=0;i<n;i++){
    a=+prompt(`nhập phần tử thử ${i+1} của mảng`);
    arr[i]=a;
}
document.writeln(`arr =`, arr, '<br>');
let max=arr[0],maxIndex=0;
for(let i=1;i<n;i++){
    if(arr[i]>max){
        max=arr[i];
        maxIndex=i;
    }
}
if(max==undefined){
    document.writeln(`không có số lớn nhất`); 
}else{
    document.writeln(`số lớn nhất: ${max} <br> Vị trí: ${maxIndex}`);
}