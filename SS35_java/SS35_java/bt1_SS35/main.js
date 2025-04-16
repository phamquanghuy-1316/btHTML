let nameee = []




let listStore = JSON.parse(localStorage.getItem("nameee"));

if (listStore) {
    nameee = listStore;
}

let container = document.getElementById("container");

function add() {
    let inputvalue = document.getElementById("input").value.trim();
    if (inputvalue === "") {
        alert("Nhập vào đi");
        return;
    }
    let newvalue = { name: inputvalue }
    nameee.push(newvalue);

    saveToLocalStore();
    show();
}

function show() {
    let html = "";
    nameee.forEach((item, index) => {
        html += `<div class="box">
            <p id="text">${item.name}</p>
            <div class="butall">
                <button onclick="edit(${index})" type="submit" id="edit">sửa</button>
                <button  onclick="dele(${index})" type="submit" id="dele">xóa</button>
            </div>
        </div>`
    })

    container.innerHTML = html;
}



function saveToLocalStore() {
    localStorage.setItem("nameee", JSON.stringify(nameee)) || [];
}

function dele(index) {
    if (confirm("chấp nhận muốn xóa")) {
        nameee.splice(index, 1);
        show();
    }
}

function edit(index) {
    let newName = prompt("nhâph vào name mới: " + nameee[index].name);
    if (!newName) {
        alert("mời nhập vào đúng");
        return;
    }

    nameee[index].name=newName;
    saveToLocalStore();
    show();


}


show();


