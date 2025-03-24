let a,countchan=0,countle=0;

for(let i=0; i<5; i++){
    a=+prompt(`nhập vào số nguyên thứ ${i+1}`);
    if(a%2!=0){
        countle++;
    }else{
        countchan++;
    }
}
document.writeln(`có ${countle} số lẻ, có ${countchan} số chẵn`);