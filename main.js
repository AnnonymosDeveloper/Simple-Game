const button = document.getElementById("game-starter-btn");
const title = document.getElementById("title");
const container = document.getElementById("container");
const answerBtns = document.querySelectorAll(".answer-btn");

button.addEventListener("click", startGame);
document.getElementById("translate-btn").addEventListener("click", () => {
  document.getElementById("eid-message").textContent =
    "☺️🫡هل تظن حقا انها لعبه؟ لا يا صديقي الان عليك ان تعطيني عيديه لانك اكبر مني سنا";
});

function startGame() {
  title.classList.add("hide");
  button.classList.add("hide");
  setTimeout(() => {
    title.style.display = "none";
    button.style.display = "none";
    container.style.display = "flex";
  }, 500);

  answerBtns.forEach((btn) => {
    btn.addEventListener("click", checkAnswer);
  });

  function checkAnswer() {
    container.style.display = "none";
    document.getElementById("eid-message").style.display = "block";
    document.getElementById("translate-btn").style.display = "block";
  }
}
