let products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://ngocnguyen.vn/cdn/images/202403/goods_img/lenovo-legion-5-ryzen-series-5-rtx-3050ti-156-inch-model-2021-G15901-1710405982968.png',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://lapvip.vn/upload/products/thumb_350x0/lenovo-legion-5-r7000-aph9-2024-1724042444.jpg',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_509_22_.png',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_509_11__1.png',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bizweb.dktcdn.net/thumb/medium/100/329/122/products/laptop-acer-aspire-5-a515-58gm-53pz-nx-kq4sv-008.jpg?v=1720544813737',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://anphat.com.vn/media/product/250_51080_laptop_acer_gaming_aspire_5_a515_58gm_53cm_nx_kw1sv003_2.jpg',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];

let box=document.getElementById("box");

function show(productList=products){
    let lac="";
    productList.forEach(product=>{
        lac+= `
          
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <h6 class="text-primary">${product.price.toLocaleString()} VNĐ</h6>
                        <a href="#" class="btn btn-primary mt-auto">Buy</a>
                    </div>
                </div>
           
           `
      
    });
    box.innerHTML=lac;
}


function search(){
   let keyword = document.getElementById("input").value.toLowerCase();
   let newArr=products.filter(item => item.name.toLowerCase().includes(keyword));
   show(newArr);
}

show();




