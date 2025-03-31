function main(){
    let a,arr=[];
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
    let totalOdd = 0,totalEven=0;
    arr.forEach(num=>{
        if (num%2==0) {
            totalOdd += num;
          }else{
            totalEven += num;
          }
    })
    document.writeln(`totalOdd = ${totalOdd} \n`);
    document.writeln(`totalEven = ${totalEven} \n`);
}
main();