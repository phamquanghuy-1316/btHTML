document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");
  
    if (email === "" || password === "") {
      errorMsg.textContent = "Vui lòng nhập đầy đủ thông tin!";
      return;
    }
  
    // Giả định người dùng đã đăng ký trước đó được lưu trong localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      errorMsg.textContent = "";
      alert("Đăng nhập thành công!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "index.html"; // Chuyển sang trang chủ
    } else {
      errorMsg.textContent = "Email hoặc mật khẩu không đúng!";
    }
  });
  