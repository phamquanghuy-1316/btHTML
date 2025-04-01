
function Max(num){
    if (!Number.isInteger(Number(num))) {
        return "dữ liệu không hợp lệ";
    }
    return +(num.toString().split("").sort((a,b)=> b-a).join("")); 
}
console.log(Max(2941));
console.log(Max(3875));
console.log(Max("1h8t"));