let result = "javascrip" + 5; //Kết quả: "javascript5", Giải thích: Khi sử dụng toán tử +, nếu một trong hai toán hạng là chuỗi, JavaScript sẽ tự động chuyển đổi số thành chuỗi và nối chúng lại.
document.writeln(result + "<br>");
result = "javascript" - 1; //Kết quả: NaN, Giải thích: Phép trừ - không hoạt động với chuỗi không thể chuyển thành số. "javascript" không thể chuyển đổi thành số hợp lệ, nên kết quả là NaN
document.writeln(result + "<br>");
result = "3" + 2; //Kết quả: "32", Giải thích: Tương tự như trường hợp đầu tiên, toán tử + khi có chuỗi sẽ ép kiểu số thành chuỗi và nối chúng lại ("3" + "2").
document.writeln(result + "<br>");
result = "5" - 4; //Kết quả: 1, Giải thích: Khi sử dụng -, JavaScript cố gắng chuyển đổi chuỗi "5" thành số 5, sau đó thực hiện phép trừ 5 - 4 = 1
document.writeln(result + "<br>");
result =  isNaN( "123");//Kết quả: false, Giải thích: Hàm isNaN() sẽ kiểm tra xem giá trị có phải là NaN hay không. Chuỗi "123" có thể chuyển đổi thành số (123), nên kết quả không phải NaN → trả về false
document.writeln(result + "<br>");
result = isNaN("hello");//Kết quả: true, Giải thích: "hello" không thể chuyển thành số hợp lệ, nên khi isNaN("hello"), JavaScript cố gắng ép kiểu nhưng thất bại, dẫn đến NaN, và isNaN(NaN) trả về true
document.writeln(result + "<br>");
result = Number.isNaN("123"); //Kết quả: false, Giải thích: Number.isNaN() chỉ trả về true nếu giá trị thực sự là NaN. Chuỗi "123" không phải NaN, ngay cả khi không thể chuyển thành số tự động như trong isNaN(), nên trả về false
document.writeln(result + "<br>");
result = Number.isNaN(NaN); //Kết quả: true, Giải thích: Number.isNaN(NaN) kiểm tra trực tiếp xem giá trị có đúng là NaN hay không. Vì NaN chính là NaN, nên kết quả là true
document.writeln(result + "<br>");