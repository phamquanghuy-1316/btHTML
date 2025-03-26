let arr= [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
arr.sort((a, b) => a - b)
for(let i=0; i<arr.length-1;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
document.writeln(arr);