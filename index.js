const num1 = Math.ceil(Math.random() * 10);
// console.log(num1);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("randomQtn");
questionEl.innerText = ` what is ${num1} multiply by ${num2} ?`;
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("points");
let score = JSON.parse(localStorage.getItem("score"));

const correctAns = num1 * num2;

const formEl = document.getElementById("form");
formEl.addEventListener("submit", () => {
  // ev.preventDefault();
  const userAns = +inputEl.value;
  // console.log(userAns, typeof userAns);

  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
  if (!score) {
    score = 0;
  }
  // console.log(score);
});
scoreEl.innerText = `Score : ${score}`;
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
