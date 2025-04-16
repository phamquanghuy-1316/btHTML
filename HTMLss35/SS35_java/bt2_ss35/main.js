let list = []
let temp = JSON.parse(localStorage.getItem("list")) || [];
if (temp) {
    list = temp;
}




let container = document.getElementById("container");


let form = document.getElementById("form");
let body = document.getElementById("body");
function add() {
    let namee = document.getElementById("name").value.trim();
    let Url = document.getElementById("web-Url").value.trim();

    if (!namee && !Url) {
        alert("sai thông tin input");
        return;
    }
    let newItem_List = { name: namee, Url: Url };

    list.push(newItem_List);
    document.getElementById("name").value = "";
    document.getElementById("web-Url").value = "";

    saveToLocalStore();
    show();

}

function showmenu() {
    form.style.display = "block"
    body.style.backgroundColor = "#302444"
    container.style.backgroundColor = "#302444"
}
function show() {
    let html = "";
    list.forEach((item, index) => {
        html +=
            `
         <div class="box">
          <span><img src="https://www.google.com/s2/favicons?domain=${item.Url}">${item.name}</span>
        </div>
        `
    })
    container.innerHTML = html;
}


function lac() {
    form.style.display = "none";
    body.style.backgroundColor = "#775aab"
}

function saveToLocalStore() {
    localStorage.setItem("list", JSON.stringify(list));
}

function chan() {
    add();
    form.style.display = "none";
}

show();