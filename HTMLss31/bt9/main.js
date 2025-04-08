let todoList = [
    {
      id: 1,
      task: "Hit the gym",
      completed: false,
    },
    {
      id: 2,
      task: "Pay bills",
      completed: true,
    },
    {
      id: 3,
      task: "Meet Gorge",
      completed: false,
    },
    {
      id: 4,
      task: "Buy eggs",
      completed: false,
    },
    {
      id: 5,
      task: "Read a book",
      completed: false,
    },
    {
      id: 6,
      task: "Oragnize office",
      completed: false,
    },
  ];

  for (let item of todoList) {
    let li = "<li>" + item.task + "<span class='close' onclick='closeWork();'>X</span></li>";
    myUL.innerHTML += li;
  }

  function addWork() {
    let myInput = document.getElementById("myInput");
    let li = "<li>" + myInput.value + "<span class='close'>X</span></li>";
    myUL.innerHTML += li;
    myInput.value = "";
  }
  function closeWork() {
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }
  }