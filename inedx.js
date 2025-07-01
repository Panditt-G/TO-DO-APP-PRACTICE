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

  //vo deelet btn
  let deletebtn = document.createElement("i");
  deletebtn.className = "fa-solid fa-trash delete-btn";
  card.append(deletebtn);

  // clear intput
  document.querySelector(".input").value = "";

  deletebtn.addEventListener("click", () => {
    card.remove();
  });
}

function valuehepler() {
  let task = document.querySelector(".input").value.trim();
  if (task === "") {
    alert("Please enter a task");
    document.querySelector(".input").focus();
  } else {
    cardadd(task);
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
