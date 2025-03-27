function(){
    while (1) {
        document.writeln(`===================MENU===================`);
        document.writeln(`1.Nhập số phần tử cần nhập và giá trị`);
        document.writeln(`2.In ra giá trị các phần tử đang quản lý`);
        document.writeln(`3.In ra các giá trị các phần tử chẵn và tính tổng`);
        document.writeln(`4.In ra giá trị lớn nhất và nhỏ nhất trong mảng`);
        document.writeln(`5.In ra cách phần tử là số nguyên tố trong mảng và tính tổng `);
        document.writeln(`6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó`);
        document.writeln(`7.Thêm một phần tử vào vị trí chỉ định`);
        document.writeln(`8. thoát`);
        let arr = [];
        let choice = +prompt("nhập lựa chọn");
        switch (choice) {
            case 1:
                let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
                let a;
                for (let i = 0; i < n; i++) {
                    a = +prompt(`nhập phần tử thử ${i + 1} của mảng`);
                    arr[i] = a;
                }
                break;
            case 2:
                document.writeln(`arr = [${arr}]`);
                break;
            case 3:
                let tongChan = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 == 0) {
                        tongChan += arr[i];
                    }
                }
                document.writeln(`Tổng các số chẵn: `, tongChan);
                break;
            case 4:
                let max = arr[0], min = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                    if (arr[i] < min) {
                        min = arr[i];
                    }
                }
                document.writeln("max = ", max);
                document.writeln("min = ", min);
                break;
            case 5:
                let sumSoNguyenTo = 0;
                function check(n) {
                    if (n <= 1) {
                        return 0;
                    }
                    for (let i = 2; i < n; i++) {
                        if (n % i == 0) {
                            return 0;
                        }
                    }
                    return 1;
                }
                for (let i = 0; i < arr.length; i++) {
                    if (check(arr[i])) {
                        sumSoNguyenTo += arr[i];
                    }
                }
                break;
            case 6:
                let count = 0;
                let m = +prompt("nhập số muốn đếm");
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] == m) {
                        count++;
                    }
                }
                if (count == 0) {
                    document.writeln(`số ${m} không tồn tại trong mảng`);
                } else {
                    document.writeln(`số ${m} xuất hiện ${count} lần`);
                }
                break;
            case 7:
                if (index < 0) {
                    console.log("Vị trí không hợp lệ!");
                } else if (index >= arr.length) {
                    arr.push(newElement); 
                } else {
                    arr.splice(index, 0, newElement); 
                }
                break;
            case 8:
                return 0;
            default:
                document.writeln("lựa chọn không hợp lệ");
                break;
        }
    }
}
