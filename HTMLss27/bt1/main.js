function sum(a,b) {
    return a+b;
}
function minus(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function main() {
    let running=true;
    while(running){
        let choice = +prompt(`
            1.Cộng hai số.
            2.Trừ hai số.
            3.Nhân hai số.
            4.Chia hai số.
            5.Thoát.
            nhập lựa chọn: 
            `);
        switch (choice) {
            case 1:
                {
                    let a=+prompt(`Nhập vào số a`);
                    let b=+prompt(`Nhập vào số b`);
                    console.log(sum(a,b));
                }
                break;
            case 2:
                {
                    let a=+prompt(`Nhập vào số a`);
                    let b=+prompt(`Nhập vào số b`);
                    console.log(minus(a,b));
                }
                break;
            case 3:
                {
                    let a=+prompt(`Nhập vào số a`);
                    let b=+prompt(`Nhập vào số b`);
                    console.log(multiply(a,b));
                }
                break;
            case 4:
                {
                    let a=+prompt(`Nhập vào số a`);
                    let b=+prompt(`Nhập vào số b`);
                    console.log(divide(a,b));
                }
                break;
            case 5:
                    running=false;
                    break;
            default:
                console.log(`lựa chọn không hợp lệ`);
    
        }
    }

}
    main();