function cardcolor(e) {
  e.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
}

function cardadd(task) {
  // let task = document.querySelector(".input").value;

  //card creat kiya
  let card = document.createElement("div");
  card.className = "card";
  cardcolor(card);
  //abhi task list select krta hu
  let tasklist = document.querySelector("#task-list");
  tasklist.prepend(card);
  //abhi card ke andar ka html h3
  let h3 = document.createElement("h3");
  h3.textContent = task;
  card.append(h3);

  // vo line horizontal
  let hr = document.createElement("hr");
  card.append(hr);

  // date add
  let date = document.createElement("p");
  date.className = "date";
  date.textContent = calendar.value
  console.log(calendar);

card.append(date);

  //vo deelet btn
  let deletebtn = document.createElement("i");
  deletebtn.className = "fa-solid fa-trash delete-btn";
  card.append(deletebtn);

  // clear intput
  document.querySelector(".input").value = "";
    document.querySelector("#calendar")._flatpickr.clear()

  


  deletebtn.addEventListener("click", () => {
    card.remove();
  });
}

function valuehepler() {
  let task = document.querySelector(".input").value.trim();
  let calendar = document.querySelector("#calendar")
  
  if (task === "" || calendar === "") {
    alert("Please enter a task ");
    document.querySelector(".input").focus();
  } else {
    cardadd(task,calendar);
  }
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  valuehepler();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    valuehepler();
  }
});
let addbtn = document.querySelector(".add-btn");
addbtn.addEventListener("click", function () {
  valuehepler();
});

//calender backchodi

flatpickr("#calendar", {
  enableTime: true,
  altInput: true,
  altFormat: "F j, Y H:i",
  dateFormat: "Y-m-d H:i",
});
