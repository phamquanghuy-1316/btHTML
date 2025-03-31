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
    let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
    if(arr.length==0){
        document.writeln(`mảng không có phần tử nào`);
        return;
    }
    for(let i=0;i<arr.length;i++){
        if(isNaN(+(arr[i]))){
            document.writeln(`Dữ liệu không hợp lệ`);
            return;
        }
    }
    document.writeln(arr.filter(num=>isPrime(num)));
}
main();