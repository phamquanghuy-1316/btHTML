
function check(n){
    if(n%2==0){
        return 1;
    }else{
        return 0;
    }
}

function main(arr){
    let count=0;
    if(!Array.isArray(arr)){
        console.log(`dữ liệu không hợp lệ`);
        return;
    }
    for(let i=0; i<arr.length; i++){
        if(check(arr[i])){
            console.log(`${arr[i]} `);
            count++
        }
    }
    if(count==0){
        console.log(`mảng không chứa số chẵn`);
        return;
    }
}   

main([11, 4, 65, 6]);  
main([1, 3, 5, 17]);  
main("text");