
let Products = [
    {
        MDM: "D001",
        TDM: "quân áo",
        status: "dang hoat dong",
    }
]


let addForm = document.getElementById("add_form");
let body = document.getElementById("body");
let over = document.getElementById("over");
let form_over = document.getElementById("container_form")
let tbody=document.getElementById("tbody")

show()

function show() {
    let html = "";

    Products.forEach((item, index) => {
        html +=
            `
        <tr>
            <td>${item.MDM}</td>
            <td>${item.TDM}</td>
            <td>${item.status}</td>
            <td>
            <i onclick="remove(${index})">remove</i>
            <i onclick="edit(${index})">edit</i>
            </td>
        </tr>
        `
    })


}

function add() {
    form_over.classList.remove("d-none");
    addForm.classList.remove("d-none")
}



function close_add() {
    form_over.classList.add("d-none");
    addForm.classList.add("d-none");
}