let restaurant={
    "nước":[],
    "món khô":[],
    "món chay":[],
}

function main(){
    let choice=0;
    do {
        choice = Number(prompt(
            "=============================\n" +
            " MENU QUẢN LÝ NHÀ HÀNG \n" +
            "=============================\n" +
            "1. Thêm món ăn\n" +
            "2. Xóa món ăn\n" +
            "3. Cập nhật món ăn\n" +
            "4. Hiển thị toàn bộ menu\n" +
            "5. Tìm kiếm món ăn\n" +
            "6. Thoát\n" +
            "-----------------------------\n" +
            "Nhập lựa chọn của bạn:"
        ));

        switch(choice){
            case 1:
                add();
                break;

            case 2:
                deleteDish();
                break;

            case 3:
                update();
                break;

            case 4:
                showmenu();
                break;

            case 5:
                search();
                break;

            case 6:
                alert("tạm biệt")
                break;

            default:
                alert("lựa chọn không hợp lệ");

        }

    }while(choice!=6)    
}

function add(){
    let category=prompt("nhap vao loai muon an muon them(nước, món khô, món chay)");
    if(restaurant.hasOwnProperty(category)){
        let name=prompt("nhap vao ten mon an moi");
        let price=0;
        do{
            price=Number(prompt("nhap vao so gia tien cho mon nay: "));
        }while(isNaN(price));

        let mota=prompt("nhap mo ta mon an moi");

        restaurant[category].push({name, price, mota});
        alert("them thanh cong")    
    }else{
        alert("khong ton tai loai do");
    }
}

function showmenu(){
    let output="------menu-----\n\n"
    for(let catagory in restaurant){
        output+="\n"+catagory+": \n"
        if(restaurant[catagory].length==0){
            output+="  chưa có món nào trong"+catagory
        }else{
            restaurant[catagory].forEach((dish, index)=>{
                output+="name: "+dish.name+" price: "+dish.price+" mô tả: "+dish.mota+"\n"
            });
        }
    }
    alert(output);
}

function deleteDishs(){
    let catagory=prompt("nhap vao danh muc chua mon an muon xoa(nước, món khô, món chay): ");
    if(restaurant.hasOwnProperty(catagory)   &&   restaurant[catagory].length>0){
      let monan=prompt("nhap vao ten mon an muon xoa");
        let monanindex=restaurant[catagory].findIndex(dish=>dish.name === monan)
        if(monanindex!==-1){
            let accep=""
            do{
                accep=(prompt("xac  nhan xoa hoac huy(yes/no)"))
            }while(accep!=="yes" && accep!=="no")
            
             if(accep=="yes"){
                restaurant[catagory].splice(monanindex, 1);
                alert("xoa theo ten mon an thanh cong")
             }else{
                alert("huy xoa mon an");
                
             }   
        }else{
            alert(" mon an khong ton tai");
        }
        }else{
            alert("khong ton tai danh muc do hoac danh muc bi trong")

        }
    }

    function update(){
        let catagory=prompt("nhap vao danh muc mon an muon cap nhat: ");
        if(restaurant.hasOwnProperty(catagory) && restaurant[catagory].length>0){
          let namedish=prompt("nhap vao ten mon an muon chinh sua");
          let dishindex=restaurant[catagory].findIndex(dish=>dish.name===namedish);
          if(dishindex!==-1){
            let name=prompt("nhap vao ten mon an moi");
            let price=0;
            do{
                price=Number(prompt("nhap vao so gia tien cho mon nay: "));
            }while(isNaN(price));
    
            let mota=prompt("nhap mo ta mon an moi");
    
            restaurant[catagory][dishindex].name=name;
            restaurant[catagory][dishindex].price=price;
            restaurant[catagory][dishindex].mota;
            alert("cap nhan mon an  thanh cong")    
          }else{
            alert("khong co mon an nào trong "+catagory)
          }
        }else{
            alert("loi");
        }
    }

function search(){
    let output="";
    let dishshearch=prompt("nhap vao ten mon an muon tim kiem trong menu").toLocaleLowerCase();
    for(let catagory in restaurant){
        restaurant[catagory].forEach(dish=>{
            if(dish.name.toLocaleLowerCase().includes(dishshearch)){
                output+="name: "+dish.name+" pprice: "+dish.price+" mô tả: "+dish.mota+"\n";
            }
        })
    }
  if(output==""){
    alert("menu trôngs!!")
  }else{
    alert(output);
  }
}


main();