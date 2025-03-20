



let choice=+prompt(`[1] VND --> USD \n[2] USD --> VND\nmời nhập lựa chọn`);
switch(choice){
    case 1:
        {
            let vnd=+prompt("nhập vào số tiền việt muốn đổi");
            let dollar=vnd/23000;
            document.writeln(`${vnd} vnd = ${dollar.toFixed(2)} $`);
            break;
        }
    case 2:
        {
            let dollar=+prompt("nhập vào số USD muốn đổi");
            let vnd=dollar*23000;
            document.writeln(`${dollar} $ = ${vnd} vnd`);
            break;
        }
    default:
        document.writeln("lựa chọn không hợp lệ");
        break;
}