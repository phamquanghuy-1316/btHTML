let kyTu=prompt("nhap vao 1 ky tu");

function check(kyTu){
    if(kyTu.length>1){
        document.writeln(`ký tự ${kyTu} không phải chữ cái`);
        return 0;
    }
    let maASCII = kyTu.charCodeAt(0);
    if((maASCII>=65 && maASCII<=90) || (maASCII>=97 && maASCII<=122)){
        document.writeln(`ký tự ${kyTu} là chữ cái`);
    }else{
        document.writeln(`ký tự ${kyTu} không phải chữ cái`);
    }
}

check(kyTu);