let a = prompt("nhap vao 1 day so");
document.writeln(a);
const arr= a.split("").map(Number);
let max=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
document.writeln("max = ", max);