document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!email) {
      alert("Email không được để trống.");
      return;
    }
  
    if (!password) {
      alert("Mật khẩu không được để trống.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Xác nhận mật khẩu không khớp.");
      return;
    }
  
    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      alert("Email đã được đăng ký.");
      return;
    }
  
    // Lưu người dùng mới
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Đăng ký thành công!");
    this.reset(); // reset form
  });
  