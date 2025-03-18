const date1 = new Date("2025-02-26");
date1.toLocaleDateString("vi-VN");
const date2 = new Date("2025-02-28");
date2.toLocaleDateString("vi-VN");
document.writeln("độ lệch là "+(date2-date1)/ (1000 * 3600 * 24)+" ngày");