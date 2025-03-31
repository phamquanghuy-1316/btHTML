function isPrime(n){
    if(n<2){
        return 0;
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return 0;
        }
    }
    return 1;
}
function main(){
    let arr=[],a;
    let n=+prompt(`nhập vào số phần tử mảng muốn nhập`);
    if(n<10 || n>20){
        document.writeln("số phần tử mảng phải từ 10-20");
        return;
    }
    for(let i=0; i<n; i++){
        a=+prompt(`nhập vào phần tử thứ ${i+1} của mảng`);
        arr[i]=a;
        if(isNaN(+(arr[i]))){
            document.writeln(`Dữ liệu không hợp lệ`);
            return;
        }
    }
    if(arr.length==0){
        document.writeln(`mảng không có phần tử nào`);
        return;
    }
    document.writeln(arr.filter(num=>isPrime(num)&& num%2!=0));
}
main();