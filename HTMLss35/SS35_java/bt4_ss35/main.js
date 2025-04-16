

let Products = []
temp = JSON.parse(localStorage.getItem("Products")) || [];

Products = temp



let tbody=document.getElementById("tbody");
let pageLength=2;
let curPage=1;









function add() {
    let namee = document.getElementById("name_Nhanvien").value.trim();
    let pos = document.getElementById("pos_Nhanvien").value.trim();

    if (!namee || !pos) {
        alert("không được bỏ trống");
        return
    }

    let new_value={name: namee, pos:pos};
    Products.push(new_value);

    render();
    saveToLocalStore();
    clearInput();

}


function render(page=1){
    curPage=page
    let start=(page-1)*pageLength;
    let end=page*pageLength;

    let currentPageData=Products.slice(start, end);



    let html="";
    currentPageData.forEach((human,index)=>{
        html+=
        `
           <tr>
                <td>${index+1}</td>
                <td>${human.name}</td>
                <td>${human.pos}</td>
            </tr>
        `
    })

    tbody.innerHTML=html;
    renderPagination();
}


function saveToLocalStore() {
    localStorage.setItem("Products", JSON.stringify(Products));
}

function clearInput(){
    document.getElementById("name_Nhanvien").value=""
    document.getElementById("pos_Nhanvien").value=""
}

let pagination=document.getElementById("pagination")
function renderPagination() {
    let totalpage = Math.ceil(Products.length / pageLength);

    let html = "";
    html += `<button class="btn btn-primary mx-1" onclick="render(${curPage - 1})"   ${curPage == 1 ? "disabled" : ""}>previous</button>`;

    for (let i = 1; i <= totalpage; i++) {
        html += `<button class="btn btn-primary mx-1" onclick="render(${i})"   ${curPage == i ? "disabled" : ""}>${i}</button>`
    }

    html += `<button class="btn btn-primary mx-1" onclick="render(${curPage + 1})"  ${curPage == totalpage ? "disabled" : ""}  >next</button>`

    pagination.innerHTML = html;
}





render();