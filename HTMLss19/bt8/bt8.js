let month = prompt("nhập vào 1 tháng");

if(month >= 1 && month <= 3){
    document.writeln("mùa xuân");
}else if(month >= 4 && month <= 6){
    document.writeln("mùa hạ");
}else if(month >= 7 && month <= 9){
    document.writeln("mùa thu");
}else if(month >= 10 && month <= 12){
    document.writeln("mùa đông");
}else{
    document.writeln("tháng không hợp lệ");
}