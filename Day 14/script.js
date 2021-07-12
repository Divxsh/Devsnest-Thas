// let blck1 = document.querySelector(".block1");
let blck1 = document.querySelector(".block1");
let blck2 = document.querySelector(".block2");

blck1.addEventListener("keydown", function (e) {
  let Up = document.querySelector(".up");
  let Down = document.querySelector(".down");
  let Left = document.querySelector(".left");
  let Right = document.querySelector(".right");

  if (e.key == "ArrowUp") {
    Up.classList.add("click");
  } else if (e.key == "ArrowDown") {
    Down.classList.add("click");
  } else if (e.key == "ArrowLeft") {
    Left.classList.add("click");
  } else if (e.key == "ArrowRight") {
    Right.classList.add("click");
  }
});

blck1.addEventListener("keyup", function (e) {
  document
    .querySelectorAll(".keys")
    .forEach((item) => item.classList.remove("click"));
});

blck2.children[0].addEventListener("mousemove", function (e) {
  let X = document.querySelector(".x");
  let Y = document.querySelector(".y");

  X.innerHTML = `X = ${e.offsetX}px`;
  Y.innerHTML = `Y = ${e.offsetY}px`;
  if (e.offsetX >= 1 && e.offsetX <= 130) {
    this.style.background = "grey";
  } else if (e.offsetX >= 131 && e.offsetX <= 260) {
    this.style.background = "yellow";
  } else if (e.offsetX >= 261 && e.offsetX <= 390) {
    this.style.background = "skyblue";
  } else {
    this.style.background = "blue";
  }
});

blck2.children[0].addEventListener("mouseout", function () {
  this.style.background = "none";
});

// Drag and Drop

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

var dragItem = document.querySelector(".item");
var sect3 = document.querySelector(".section3");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

sect3.addEventListener("mousedown", dragStart, false);
sect3.addEventListener("mouseup", dragEnd, false);
sect3.addEventListener("mousemove", drag, false);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  console.log(initialX);
  if (e.target === dragItem) {
    active = true;
  }
}

function drag(e) {
  if (active) {
    e.preventDefault();

    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}
