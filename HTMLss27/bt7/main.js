let arr=[1,2,4,5];
function check(arr){
    if (!Array.isArray(arr)) {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    for(let i=0; i<arr.length-1; i++){
        if(arr[i+1]!=arr[i]+1){
            console.log(arr[i]+1);
            break;
        }
    }
}
check([1, 2, 4, 5]);  
check([5, 6, 8, 9]); 
check("abc");