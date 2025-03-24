//in cạnh dài
for(let i=0; i<21; i++){
    document.writeln("*");
}
for(let j=0; j<5; j++){
    document.writeln("<br>");
    for(let i=0; i<21; i++){
        if(i==0 || i==20){
            document.writeln("*");
        }else{
            document.writeln("&nbsp;&nbsp;");
        }
    }
}
document.writeln("<br>");
for(let i=0; i<21; i++){
    document.writeln("*");
}
