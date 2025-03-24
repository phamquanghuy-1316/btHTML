 function getRandomHexColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
 }

 function logRandomColors() {
    for (let i = 0; i < 10; i++) {
        let color = getRandomHexColor();
        console.log(`%c Màu sắc đã được thay đổi :`, `color: ${color}`);
    }
}

logRandomColors();