"use sctrict";

const lorem = document.querySelector("#lorem");
const btns = document.querySelectorAll("#root > button");

function colorChangeHandler(e) {
  const {
    target: {
      dataset: { color },
    },
  } = e;

  lorem.style.color = color;
}

for (const btn of btns) {
  btn.addEventListener("click", colorChangeHandler);
}


function intervalFunc() {
  let i = 0;
  const timer = setInterval(function() {
    console.log(++i);
    if (i == 20) clearInterval(timer);
    
  }, 1000);
}
