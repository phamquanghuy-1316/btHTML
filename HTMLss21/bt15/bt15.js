function atmWithdrawal(amount) {
    // Danh sách các mệnh giá tiền
    let denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    
    // Kiểm tra số tiền có chia hết cho 1.000 không
    if (amount % 1000 !== 0) {
        document.writeln("Số tiền phải chia hết cho 1.000!");
        return;
    }

    document.writeln(`Số tiền rút: ${amount.toLocaleString()} VND`);

    // Lặp qua từng mệnh giá tiền và tính số tờ cần rút
    for (let denom of denominations) {
        document.writeln("<br>");
        let count = Math.floor(amount / denom); // Số tờ tiền loại này
        if (count > 0) {
            document.writeln(`${denom.toLocaleString()} VND: ${count} tờ`);
            amount -= count * denom; // Giảm số tiền cần rút
        }
    }
}

// Nhập số tiền từ người dùng
let amount = parseInt(prompt("Nhập số tiền cần rút:"));
atmWithdrawal(amount);
