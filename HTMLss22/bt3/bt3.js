let inputString = prompt("Nhập các phần tử của mảng (không dấu cách):");
let arr = inputString.split("").map(Number); 

console.log("Mảng vừa nhập:", arr.join(""));
console.log("Mảng sau khi đảo ngược:", arr.reverse().join(""));
