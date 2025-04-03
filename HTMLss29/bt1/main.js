let contract = [
    { id: 1, name: "Nguyen Van A", email: "a@example.com", phone: "0123456789", isAvailable: true }
];

function addContract() {
    let id;
    while (true) {
        id = +prompt("Hay nhap id:")
        if (contract.some(contract => contract.id == id)) {
            alert("ID da ton tai, hay nhap lai")
            continue
        }
        break
    }
    let name = prompt("Hay nhap ten lien he:")
    let email = prompt("Hay nhap emailemail:")
    let phone = prompt("Hay nhap sdt:")

    contract.push({ id, name, email, phone })

}

function showContract() {
    contract.forEach(contract => {
        console.log(`ID: ${contract.id}, Name: ${contract.name}, Email: ${contract.email}, Phone: ${contract.PhoneNumber}`);
    });
}

function searchContract() {
    let searchPhone = prompt("Hay nhap sdt can tim:");
    for (let i = 0; i < contract.length; i++) {
        if (contract.name.includes(searchPhone)) {
            alert(`ID: ${contract.id}, Name: ${contract.name}, Email: ${contract.email}, Phone: ${contract.PhoneNumber}`);
        }
    }
}

function updateContract() {
    let findId = +prompt("Hãy nhập ID liên hệ cần cập nhật:");
    let contact = contract.find(c => c.id === findId);
    if (contact) {
        contact.name = prompt("Nhập tên mới:", contact.name);
        contact.email = prompt("Nhập email mới:", contact.email);
        contact.phone = prompt("Nhập số điện thoại mới:", contact.phone);
        alert("Cập nhật thành công!");
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}

function deleteContract() {
    let findId = +prompt("Hay nhap id lien he can xoa:");
    for (let i = 0; i < contract.length; i++) {
        if (contract.id == findId) {
            contract.splice(i, 1); ///
            alert(`lien he ${contract.name} da duoc xoa khoi danh sach lien he`);
        }
    }
}



function menu() {
    let choice;
    do {
        console.log("-----------------------------------------------------");
        console.log("1. Thêm đối tượng Contact vào danh sách liên hệ");
        console.log("2. Hiển thị danh sách danh bạ.");
        console.log("3. Tìm kiếm thông tin Contact theo số điện thoại.");
        console.log("4. Cập nhật thông tin Contact(name, email, phone) theo id.");
        console.log("5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.");
        console.log("6. Thoat");
        console.log("-----------------------------------------------------");
        choice = prompt("Nhap vao lua chon:")

        switch (choice) {
            case "1":
                addContract();
                break;
            case "2":
                showContract();
                break;
            case "3":
                searchContract();
                break;
            case "4":
                updateContract();
                break;
            case "5":
                deleteContract();
                break;
            case "6":
                alert("Kết thúc chương trình");
                break;
            default:
                alert("Không có lựa chọn này");
                break;
        }
    } while (choice != "6");
}
menu();