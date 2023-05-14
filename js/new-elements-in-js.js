// // "use strict";

// // let counter = 0;

// // function buttonAlert() {
// //   alert(counter+=1);

// // }

// // const [firstButton] = document.getElementsByTagName("button");
// // firstButton.addEventListener("click", buttonAlert);
// const par = document.getElementById("display");

// // par.addEventListener("click", btnHandler);
// let counter = 0;
// function btnHandler(event) {
//   par.textContent = `you have clicked ${++counter} times`;
//   // par.className = 'test';
//   par.classList.add("test");
// }
// const btn = document.getElementById("btn");
// btn.addEventListener("click", btnHandler);

// const img = document.getElementById("img");

// const arr = [
//   {
//     src: "./img/cat.jpeg",
//     alt: "cat",
//   },
//   {
//     src: "./img/joy.jpg",
//     alt: "dog",
//   },
// ];
// let currentAnimal = 0;
// const imageTitle = document.createAttribute("title");
// imageTitle.value = "Hi i am a Cat";
// img.setAttributeNode(imageTitle);

// function imgChange() {
//   if (currentAnimal === 0) {
//     img.setAttribute("src", arr[1].src);
//     img.setAttribute("alt", arr[1].alt);
//     imageTitle.value = 'And i am a Dog';
//     currentAnimal = 1;
//   } else {
//     currentAnimal = 0;
//     img.setAttribute("src", arr[0].src);
//     img.setAttribute("alt", arr[0].alt);
//     imageTitle.value = "Hi i am a Cat";

//   }
// }

// btn.addEventListener("click", imgChange);

// const newElement =  document.createElement('p');
// newElement.textContent = 'This is new paragraph makes on JS';
// par.append(newElement);

const fatherElem = document.getElementById("testdiv");
const newChild = document.createElement("p");
newChild.textContent = "This is text of new Element";
fatherElem.prepend(newChild);

newChild.classList.add("bold");

// fatherElem.removeChild(newChild); видалення дочірнього елементу!

const newBtn = document.createElement("button");
newBtn.textContent = "X";
fatherElem.append(newBtn);
newBtn.className = "btn";

// function buttonDelete (){
//   fatherElem.removeChild(newBtn);
// }
// newBtn.addEventListener("click", buttonDelete);

newBtn.addEventListener("click", (event) => {
  event.target.remove();
});
// // function buttonAlert() {
// //   alert(counter+=1);

// // }
