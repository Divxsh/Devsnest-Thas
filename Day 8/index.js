const block = document.getElementById("container");

for (let i = 1; i <= 20; i++) {
  for (let j = 1; j <= 20; j++) block.innerHTML += "<div class = 'a'></div>";
}

const click = document.querySelectorAll(".a");

click.forEach((el) => {
  el.addEventListener("click", function check() {
    remove(el);
  });
});

function remove(el) {
  if (el.classList.contains("a")) {
    el.classList.remove("a");
    el.classList.add("b");
  } else {
    el.classList.remove("b");
    el.classList.add("a");
  }
}
