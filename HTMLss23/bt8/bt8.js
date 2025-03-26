let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
let arr=[];
let a
if(n<0){
    document.writeln("Số lượng phần tử không được nhỏ hơn 0")
}
for(let i=0;i<n;i++){
    a=+prompt(`nhập phần tử thử ${i+1} của mảng`);
    arr[i]=a;
}
function check(arr){
    if(arr[0]==0&&arr[1]==1){
        for(let i = 2; i<arr.length;i++){
            if(arr[i]!=arr[i-1]+arr[i-2]){
                return 0;
            }
        }
        return 1;
    }else{
        return 0;
    }
}
if(check(arr)){
    document.writeln("Là dãy số fibonacci");
}else{
    document.writeln("Không phải dãy số fibonacci")
}