let n = +prompt("nhập vào số tự nhiên n");
let i=2,count=0;

function main(){
    if(n<0){
        document.writeln("không hợp lệ");
        return 0;
    }
    
    function check(n){
        if(n<=1){
            return 0;
        }
        for(let i=2; i<n;i++){
            if(n%i==0){
                return 0;
            }
        }
        return 1;
    }
    
    while(count<n){
        if(check(i)){
            document.writeln(i + "</br>");
            count++;
        }
        i++
    }
}

main();