function newdate(arr){
    return arr.map(date => {
        let parts = date.split("-");
        return parts[2] + "/" + parts[1] + "/" + parts[0]; // Đảo vị trí năm, tháng, ngày
    });
}

function main(){
    let arr=["2025-03-10", "2024-12-25", "2023-07-01"];
    if(arr.length==0){
        document.writeln(`mảng không có phần tử nào`);
        return;
    }
    document.writeln(newdate(arr));
}
main();