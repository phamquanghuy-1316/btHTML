function countPositiveIntegers(arr) {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    if(count==0){
        return `không có số nguyên dương trong mảng`
    }
    return count;
}



// Test cases
console.log(countPositiveIntegers([4,5.4,6,-2])); 
console.log(countPositiveIntegers([1.2,-3,-6])); 


