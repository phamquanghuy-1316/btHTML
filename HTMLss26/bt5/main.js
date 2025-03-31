function main(){
    let a,arr=[];
    for(let i=0; i<10; i++){
        a=+prompt(`nhập vào phần tử thứ ${i+1} của mảng`);
        arr[i]=a;
        if(isNaN(+(arr[i]))){
            document.writeln(`Dữ liệu không hợp lệ`);
            return;
        }
        // if(){
        //     document.writeln(`mảng không có phần tử nào`);
        //     return;
        // }
    }
    let Max = arr[0];
    arr.forEach(num=>{
        if (num > Max) {
            Max = num;
          }
    })
    document.writeln(`Max = ${Max} \n`);
    document.writeln(`position = ${arr.indexOf(Max)} \n`);
}
main();