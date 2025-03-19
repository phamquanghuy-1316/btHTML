let hours =+prompt("nhập vào giờ");
let minutes=+prompt("nhập vào phút");
let seconds=+prompt("nhập vào giây");

let kyHieu= hours>=12 ? "PM" : "AM"
hours = hours % 12 
hours = (hours == 0)? 12 : hours
document.writeln(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${kyHieu}`);