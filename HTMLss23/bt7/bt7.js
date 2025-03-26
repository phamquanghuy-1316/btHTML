let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
let arr=[];
let a
for(let i=0;i<n;i++){
    a=+prompt(`nhập phần tử thử ${i+1} của mảng`);
    arr[i]=a;
}
document.writeln(`arr =`, arr, '<br>');
let max=arr[0],max2=0;
for(let i=1;i<n;i++){
    if(arr[i]>max){
        max2=max;
        max=arr[i];
    }
}
if (n < 0) {
    document.writeln(`Số lượng phần tử không được âm`);
} else if (n == 0) {
    document.writeln(`Mảng không có phần tử`);
}else{
    document.writeln(max2);
}
