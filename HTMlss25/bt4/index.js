
function check(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function main(n) {
    let count = 0;
    if (isNaN(Number(n))) {
        console.log(`dữ liệu không hợp lệ`);
        return;
    }
    if (check(n)) {
        console.log(`là số nguyên tố`);

    }else{
        console.log(`không phải là số nguyên tố`);
    }
}

main(17);
main(6);
main("text");