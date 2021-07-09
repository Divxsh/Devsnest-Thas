let questions = [
  {
    question: "What does Html Stands for ?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language ",
    c: "Hyper Text Multiple Language ",
    d: "Hyper Text Multi Language ",
    ans: "Hyper Text Markup Language",
  },
  {
    question: "What is Javascript ?",
    a: "Asynchronus Language",
    b: "Synchronous & single threaded language",
    c: "Procedure Oriented Language ",
    d: "Multi-threaded Language ",
    ans: "Synchronous & single threaded language",
  },
  {
    question: "Which of the following is a server-side Java Script object?",
    a: "Function",
    b: "File",
    c: "FileUpload",
    d: "Date ",
    ans: "File",
  },
  {
    question: "To insert a JavaScript into an HTML page, which tag is used?",

    a: "< script=’java’>",
    b: "< script>",
    c: "< javascript>",
    d: "< js>",
    ans: "< script>",
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    a: "interface",
    b: "throws",
    c: "program",
    d: "short",
    ans: "program",
  },
];

let quiz = true;
let i = 0;

function question_select() {
  let len = questions.length;
  let rand = Math.floor(Math.random() * len);
  let ques = questions[rand];
  questions.splice(rand, 1);

  return ques;
}

function create_Quiz() {
  if (i + 1 == 5) return;
  var obj = questions[i];
  i++;
  let quiz_container = document.getElementById("quiz-container");

  quiz_container.innerHTML = `<div class="nav"></div>`;
  let header = document.querySelector(".nav");
  header.innerHTML = `<h2>JavaScript Basic Quiz</h2><div class="timer"></div>`;

  let quiz_create = document.createElement("div");
  quiz_create.classList.add("quiz");
  quiz_container.appendChild(quiz_create);

  let question_create = document.createElement("h2");
  question_create.classList.add("question");
  quiz_create.appendChild(question_create);

  let options_create = document.createElement("div");
  options_create.classList.add("quiz-options");
  quiz_create.appendChild(options_create);

  let option_create = `<div class='option'></div>`;

  let next_btn = document.createElement("div");
  next_btn.classList.add("next-btn");
  quiz_create.appendChild(next_btn);

  for (let i = 0; i < 4; i++) {
    options_create.innerHTML += option_create;
  }

  // putting questions and options
  question_create.innerText = obj.question;
  let opt = document.querySelectorAll(".option");
  opt[0].innerHTML = obj.a;
  opt[1].innerHTML = obj.b;
  opt[2].innerHTML = obj.c;
  opt[3].innerHTML = obj.d;

  opt.forEach((item) =>
    item.addEventListener("click", () => {
      console.log("i was CLicked", quiz);
      check(item, { ...obj });
    })
  );
}

if (i == 0) {
  create_Quiz();
}

function check(e, { ans }) {
  if (!quiz) return;

  if (e.innerText == ans) {
    e.classList.add("true");
    quiz = false;
  } else {
    quiz = false;
    e.classList.add("false");
  }

  let next_btn = document.querySelector(".next-btn");
  next_btn.addEventListener("click", () => {
    quiz = true;
    create_Quiz();
  });
}
