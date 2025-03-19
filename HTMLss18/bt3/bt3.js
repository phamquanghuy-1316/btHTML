let user="ADMIN";
let username=prompt("nhập tên đăng nhập");
let password;
if(username == user){
    password=+prompt("Nhập mật khẩu");
    if(password== "TheMaster"){
        document.writeln("Welcome");
    } else if(password===null) {
        document.writeln("Cancelled");
    }else{
        document.writeln("Wrong password");
    }
}else if(username===null){
    document.writeln("Cancelled");
}else{
    document.writeln("I Don’t know you");
}