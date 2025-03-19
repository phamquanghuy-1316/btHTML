let num = +prompt("Nhập vào 1 số");

switch (num) {
    case 0:
        document.writeln("số không");
        break;
    case 1:
        document.writeln("số một");
        break;
    case 2:
        document.writeln("số hai");
        break;
    case 3:
        document.writeln("số ba");
        break;
    case 4:
        document.writeln("số bốn");
        break;
    case 5:
        document.writeln("số năm");
        break;
    case 6:
        document.writeln("số sáu");
        break;
    case 7:
        document.writeln("số bảy");
        break;
    case 8:
        document.writeln("số tám");
        break;
    case 9:
        document.writeln("số chín");
        break;
    default:
        document.writeln("phải là số từ 0 đến 9");
        break;
}