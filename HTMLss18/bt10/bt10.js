
let a= +prompt("Nhập vào số nguyên từ 0-999");

//kiem tra hang trăm
function kiemtrahangtram(a){
    if(Math.floor(a / 100) % 10==0){
        return "";
    }
    if(Math.floor(a / 100) % 10==1){
        return "một trăm";
    }
    if(Math.floor(a / 100) % 10==2){
        return "hai trăm";
    }
    if(Math.floor(a / 100) % 10==3){
        return "ba trăm";
    }
    if(Math.floor(a / 100) % 10==4){
        return "bốn trăm";
    }
    if(Math.floor(a / 100) % 10==5){
        return "năm trăm";
    }
    if(Math.floor(a / 100) % 10==6){
        return "sáu trăm";
    }
    if(Math.floor(a / 100) % 10==7){
        return "bảy trăm";
    }
    if(Math.floor(a / 100) % 10==8){
        return "tám trăm";
    }
    if(Math.floor(a / 100) % 10==9){
        return "chín trăm";
    }
}

function kiemrahangchuc(a){
    if(Math.floor(a / 10) % 10==0){
        return " linh ";
    }
    if(Math.floor(a / 10) % 10==1){
        return " mười ";
    }
    if(Math.floor(a / 10) % 10==2){
        return " hai mươi ";
    }
    if(Math.floor(a / 10) % 10==3){
        return " ba mươi ";
    }
    if(Math.floor(a / 10) % 10==4){
        return " bốn mươi ";
    }
    if(Math.floor(a / 10) % 10==5){
        return " năm mươi ";
    }
    if(Math.floor(a / 10) % 10==6){
        return " sáu mươi ";
    }
    if(Math.floor(a / 10) % 10==7){
        return " bảy mươi ";
    }
    if(Math.floor(a / 10) % 10==8){
        return " tám mươi ";
    }
    if(Math.floor(a / 10) % 10==9){
        return " chín mươi ";
    }
}

function kiemrahangdv(a){
    if(a%10==0){
        return "";
    }
    if(a%10==1){
        return " một ";
    }
    if(a%10==2){
        return " hai ";
    }
    if(a%10==3){
        return " ba ";
    }
    if(a%10==4){
        return " bốn ";
    }
    if(a%10==5){
        return " năm ";
    }
    if(a%10==6){
        return " sáu ";
    }
    if(a%10==7){
        return " bảy ";
    }
    if(a%10==8){
        return " tám ";
    }
    if(a%10==9){
        return " chín ";
    }
}

document.writeln(kiemtrahangtram(a)+kiemrahangchuc(a)+kiemrahangdv(a));