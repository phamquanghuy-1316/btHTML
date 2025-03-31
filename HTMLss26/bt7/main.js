function main(){
    let a,arr=[];
    for(let i=0; i<10; i++){
        a=+prompt(`nhập vào phần tử thứ ${i+1} của mảng`);
        arr[i]=a;
        if(isNaN(+(arr[i]))){
            document.writeln(`Dữ liệu không hợp lệ`);
            return;
        }
    }
    document.writeln(arr.filter(num => num%2==0));
}
main();