const seat = document.getElementById("seats");
for (let i = 1; i <= 36; i++) {
  seat.innerHTML += ' <div class="box"></div>';
}

const box = document.querySelectorAll(".box");
var book = 0;
var remain = 36;

box.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("boxclicked")) {
      el.classList.remove("boxclicked");
      book--;
      remain++;
    } else {
      el.classList.add("boxclicked");
      book++;
      remain--;
    }
    document.getElementById("book").innerText = book;
    document.getElementById("remain").innerText = remain;
  })
);
