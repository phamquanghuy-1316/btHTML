let a,sum=0;

for(let i=0; i<5; i++){
    a=+prompt(`nhập vào số nguyên thứ ${i+1}`);
    if(a%2!=0){
        sum+=a;
    }
}
document.writeln(`tổng các số lẻ là ${sum}`);