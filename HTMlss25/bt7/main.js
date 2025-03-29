function capitalizeWords(str) {
    let result = "";
    let capitalizeNext = true;
    
    for (let i = 0; i < str.length; i++) {
        if (capitalizeNext) {
            result += str[i].toUpperCase(); // Chuyển ký tự đầu tiên của từ thành chữ in hoa
            capitalizeNext = false;
        } else {
            result += str[i].toLowerCase(); // Chuyển các ký tự còn lại thành chữ thường
        }
        
        if (str[i] === " ") {
            capitalizeNext = true;
        }
    }
    
    return result;
}

// Test cases
console.log(capitalizeWords("hello WORLD")); // "Hello World"
console.log(capitalizeWords("rIKKei acaDEMy")); // "Rikkei Academy"
