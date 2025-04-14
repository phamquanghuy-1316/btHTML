let targets=[
    {
        name: "Học bài",
        level: "Cao",
        status: "Đã đạt"
    }
]

const targetList = document.querySelector(`#myUL`);

function renderTarget(){
    let targetHTML=``
    for(let i=0; i<targets.length; i++){
        targetHTML += `
            <li> <span>${targets[i].name}</span> <span>${targets[i].level}</span> <span>${targets[i].status}</span> <span><button onclick="loadTarget(${i})">Sửa</button> <button onclick="deleteTarget(${i})">Xóa</button></span></li>
        `
    }
    targetList.innerHTML=targetHTML;
}

//khai bao
let formEL=document.querySelector(`form`)

function addTarget(event){
    event.preventDefault();
    targets.push({
        name: event.target.inputname.value,
        level: event.target.inputlevel.value,
        status: event.target.inputStatus.value
    })
    formEL.reset();
    renderTarget()
}

function deleteTarget(index){
    if(confirm(`Xác nhận xóa`)){
        targets.splice(index,1);
        renderTarget();
    }
}

let currentEditIndex = null
function loadTarget(index){
    formEL.inputname.value=targets[index].name
    formEL.inputlevel.value=targets[index].level
    formEL.inputStatus.value=targets[index].status
    currentEditIndex=index
}

function editTarget(event){
    event.preventDefault()
    const oldStatus = targets[currentEditIndex].status;
    targets[currentEditIndex]={
        name:formEL.inputname.value,
        level:formEL.inputlevel.value,
        status: oldStatus
    }
    currentEditIndex = null;
    formEL.reset();
    renderTarget();
}

function handleSubmit(event){
    event.preventDefault()
    console.log(currentEditIndex)
    if(currentEditIndex!=null){
        editTarget(event);
    }else{
        addTarget(event);
    }
}
renderTarget();