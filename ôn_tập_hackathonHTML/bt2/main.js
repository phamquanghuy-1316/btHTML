let Contracts = [
    {
        Name: "Phạm Quang Huy",
        phone: "0872613131",
        email: "huy@gmail.com"
    },

]

const tbodyEL = document.querySelector('tbody')
const formEditEL = document.querySelector('#edit')

tbodyEL.innerHTML = `

`
function renderContract() {
    let dataHTML = ``;
    for (let i = 0; i < Contracts.length; i++) {
        dataHTML += `
         <tr>
            <th>${i + 1}</th>
            <td>${Contracts[i].Name}</td>
            <td>${Contracts[i].phone}</td>
            <td>${Contracts[i].email}</td>
            <td>
                <button onclick="loadContract(${i})">Sửa</button>
                <button onclick="deleteContract(${i})">Xóa</button>
            </td>
        </tr>
        `
    }
    tbodyEL.innerHTML = dataHTML

}

function isPhoneNum(str) {
    if (str.length != 10) {
        return {
            isValid: false,
            message: "số điện thoại phải có 10 chữ số"
        }
    }
    if (str[0] != 0) {
        return {
            isValid: false,
            message: "số điện thoại phải bắt đầu bằng số 0"
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            return {
                isValid: false,
                message: "Số điện thoại phải là số"
            }
        }
    }
    return {
        isValid: true
    }
}

function addContract(event) {
    event.preventDefault();
    let phoneNum = event.target.InputNum.value;
    if (!isPhoneNum(phoneNum).isValid) {
        alert(isPhoneNum(phoneNum).message)
        return
    }
    Contracts.push({
        Name: event.target.InputName.value,
        phone: event.target.InputNum.value,
        email: event.target.InputEmail.value
    })
    renderContract();
}

function deleteContract(index) {
    console.log(index);
    Contracts.splice(index, 1)
    console.log(Contracts)
    renderContract();
    alert('xóa thành công')
}

let currentEditIndex = null;
function loadContract(index) {
    formEditEL.InputName.value = Contracts[index].Name;
    formEditEL.InputNum.value = Contracts[index].phone;
    formEditEL.InputEmail.value = Contracts[index].email;
    currentEditIndex = index;
}

function editContract(event) {
    event.preventDefault();
    console.log(currentEditIndex)
    if (currentEditIndex !== null) {
        Contracts[currentEditIndex] = {
            Name: formEditEL.InputName.value,
            phone: formEditEL.InputNum.value,
            email: formEditEL.InputEmail.value
        };
    }
    renderContract();
}

function handleSubmit(event) {
    event.preventDefault();

    if (currentEditIndex !== null) {
        // Đang sửa
        editContract(event);
        alert("Cập nhật thành công!");
    } else {
        // Đang thêm mới
        addContract(event);
        alert("Thêm thành công!");
    }

    // Reset form và trạng thái sau khi xử lý
    event.target.reset();
    currentEditIndex = null;
}
renderContract();