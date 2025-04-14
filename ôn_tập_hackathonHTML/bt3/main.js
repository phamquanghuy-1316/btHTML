let StoreList = [
    {
        name: 'chuối',
        price: 20000
    },
    {
        name: 'Thịt',
        price: 30000
    }
]

const ItemList= document.querySelector('#ItemList')

function showItem(Danhsach = StoreList) {
    let dataHTML = ``;
    for (let i=0; i<Danhsach.length; i++) {
        dataHTML += `
            <div class="card">
                <h5 class="card-header">${Danhsach[i].name}</h5>
                <div class="card-body">
                <h5 class="card-title">${Danhsach[i].price}đ</h5>
                <button class="btn btn-primary" onclick="loadItem(${i})">Sửa</button>
                <button class="btn btn-primary" onclick="deleteItem(${i})">Xóa</button>
                <button class="btn btn-primary">Mua</button>
                </div>
            </div>
        `
    }
    ItemList.innerHTML=dataHTML;
}

function addItem(event){
    event.preventDefault();
    if(isNaN())
    StoreList.push({
        name: event.target.addName.value,
        price: +event.target.addPrice.value
    })
    showItem();
    event.taget.reset();
}

function deleteItem(index){
    if(confirm(`xác nhận xóa?`)){
        StoreList.splice(index,1);
        showItem();
        alert(`Xóa thành công`)
    }
}
//khai bao
let currentEditIndex=null
let formEL= document.querySelector(`form`)

function loadItem(index){
    console.log(formEL)
    formEL.addName.value=StoreList[index].name
    formEL.addPrice.value=StoreList[index].price
    currentEditIndex=index;
}

function editItem(event){
    event.preventDefault();
    if(currentEditIndex!=null){
        StoreList[currentEditIndex]={
            name: formEL.addName.value,
            price: formEL.addPrice.value
        }
    }
    showItem();
}

function handleSubmit(event){
    event.preventDefault();
    console.log(currentEditIndex)
    if(currentEditIndex!=null){
        editItem(event)
    }else{
        addItem(event)
    }
}

function searchItem(){
    let contentSearch=document.querySelector(`#searchItem`).value.toLowerCase()
    let arrayResult=StoreList.filter((item) => {
        return item.name.toLowerCase().includes(contentSearch)
    })
    showItem(arrayResult);
}
showItem();