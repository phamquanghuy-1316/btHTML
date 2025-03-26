let arr = [ "", false, 0, undefined, null ];
for(let i=0; i<arr.length;i++){
    if(!arr[i]){
        arr.splice(i,1);
        i--;
    }
}
document.writeln(`arr= [${arr}]`);