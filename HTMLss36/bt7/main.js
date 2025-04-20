// Hàm lấy danh sách người dùng từ localStorage
function getUsers() {
  const data = localStorage.getItem("Users");
  return data ? JSON.parse(data) : [];
}

// Hàm lưu người dùng vào localStorage
function saveUsers(users) {
  localStorage.setItem("Users", JSON.stringify(users));
}

// Kiểm tra username có tồn tại chưa
function isUsernameExist(username, users) {
  return users.some(user => user.username === username);
}

// Xử lý Đăng ký
const RegisterForm = document.querySelector(".register-form");
if (RegisterForm) {
  const inputName = document.getElementById("inputname");
  const inputPassword = document.getElementById("inputpassword");

  RegisterForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = inputName.value.trim();
    const password = inputPassword.value;

    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const users = getUsers();

    if (isUsernameExist(username, users)) {
      alert("Username đã tồn tại!");
      return;
    }

    users.push({ username, password, role: "USER" }); // Thêm mặc định role USER
    saveUsers(users);
    alert("Đăng ký thành công!");
    RegisterForm.reset();
    window.location.href = "login.html";
  });
}

// Xử lý Đăng nhập
const LoginForm = document.querySelector(".login-form");
if (LoginForm) {
  LoginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      alert("Đăng nhập thành công!");
      // Lưu thông tin đăng nhập nếu cần
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      window.location.href = "home.html"; // Điều hướng sau khi đăng nhập
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  });
}
