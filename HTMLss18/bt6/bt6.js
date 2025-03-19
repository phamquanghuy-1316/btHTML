let year = +prompt("Nhập vào 1 năm bất kỳ");

if(year%400==0){
    document.writeln(`${year} là năm nhuận`);
}else if (year%100==0){
    document.writeln(`${year} ko là năm nhuận`);
}else if (year%4==0){
    document.writeln(`${year} là năm nhuận`);
}else{
    document.writeln(`${year} ko là năm nhuận`);
}