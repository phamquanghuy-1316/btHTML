function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function main() {
    let input = prompt("Nhập vào một chuỗi để kiểm tra đối xứng:");
    if (input === null || input.trim() === "") {
        alert("Chuỗi không hợp lệ. Vui lòng nhập lại!");
        return;
    }
    
    if (isPalindrome(input)) {
        alert(`Chuỗi "${input}" là chuỗi đối xứng!`);
    } else {
        alert(`Chuỗi "${input}" không phải là chuỗi đối xứng!`);
    }
}

main();
