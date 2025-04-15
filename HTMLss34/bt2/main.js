let courses = JSON.parse(localStorage.getItem('courses')) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci ớt ớt' }
  ];
  
  let editingId = null;
  
  function saveToLocalStorage() {
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  
  function renderTable() {
    const tbody = document.querySelector('#taskTable tbody');
    tbody.innerHTML = '';
  
    courses.forEach((course, index) => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${course.content}</td>
        <td>${course.dueDate}</td>
        <td>${course.status}</td>
        <td>${course.assignedTo}</td>
        <td>
          <button class="edit" onclick="editTask(${course.id})">Sửa</button>
          <button class="delete" onclick="deleteTask(${course.id})">Xóa</button>
        </td>
      `;
  
      tbody.appendChild(row);
    });
  }
  
  function resetForm() {
    document.getElementById('taskForm').reset();
    editingId = null;
  }
  
  document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;
  
    if (editingId !== null) {
      const index = courses.findIndex(c => c.id === editingId);
      courses[index] = { id: editingId, content, dueDate, status, assignedTo };
    } else {
      const newTask = {
        id: Date.now(),
        content,
        dueDate,
        status,
        assignedTo
      };
      courses.push(newTask);
    }
  
    saveToLocalStorage();
    renderTable();
    resetForm();
  });
  
  function editTask(id) {
    const task = courses.find(t => t.id === id);
    if (task) {
      document.getElementById('content').value = task.content;
      document.getElementById('dueDate').value = task.dueDate;
      document.getElementById('status').value = task.status;
      document.getElementById('assignedTo').value = task.assignedTo;
      editingId = id;
    }
  }
  
  function deleteTask(id) {
    courses = courses.filter(t => t.id !== id);
    saveToLocalStorage();
    renderTable();
  }
  
  renderTable();
  