function checkExperience() {
    let years=+prompt("Nhập số năm kinh nghiệm");
    if(years < 1){
        document.writeln("mới vào nghề");
        return 1;
    }
    if(years >= 1 && years <= 3){
        document.writeln("Nhân viên có kinh nghiệm");
        return 1;
    }
    if(years >= 4 && years <= 6){
        document.writeln("Chuyên viên");
        return 1;
    }
    
    document.writeln("Quản lý");
}
checkExperience();