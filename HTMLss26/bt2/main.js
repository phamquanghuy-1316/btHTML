function main(){
    let a,arr=["apple", "banana", "cat", "elephant", "dog"];
  
    if(arr.length==0){
        document.writeln(`mảng không có phần tử nào`);
        return;
    }
    document.writeln(arr.filter(word => word.length>5));
}
main();