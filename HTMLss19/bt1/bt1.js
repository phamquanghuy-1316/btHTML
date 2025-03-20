let month = +prompt("nhập vào 1 tháng ");

function checkmonth(month){
    if(month >12 || month<1){
        document.writeln("tháng không hợp lệ");
        return 0;
    }
    if(month==2){
        document.writeln("tháng 2 có 28 hoặc 29 ngày năm nhuận");
        return 0;
    }
    if(month==12){
        document.writeln("tháng 12 có 31 ngày ");
        return 0;
    }
    if(month%2==0){
        document.writeln(`tháng ${month} có 30 ngày `); 
        return 0;
    }else{
        document.writeln(`tháng ${month} có 31 ngày `);
    }
}

checkmonth(month);