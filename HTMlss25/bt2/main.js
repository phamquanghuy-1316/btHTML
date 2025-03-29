function sumCal(a,b){
    if(!Number.isInteger(a)||!Number.isInteger(b)){
        return `dữ liệu không hợp lệ`;
    }
    return a+b;
}   
alert(sumCal(4,2));

