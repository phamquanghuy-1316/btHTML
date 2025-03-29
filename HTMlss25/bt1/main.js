function findMin(arr){
    let min=arr[0];
    for(let i=0; i< arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}

let arr=[5,2,7,5,4];
if(arr.length==0){
    alert('mảng không chứa phần tử');
}else if(!Array.isArray(arr)){
    alert('giá trị không hợp lệ');
}else{
    alert(`phần tử nhỏ nhất trong mảng là ${findMin(arr)}`)
}