let score = 0;

function check(answer) {
  if (answer === 18 || answer === 'eci' || answer === 'right') {
    score++;
  }
  document.getElementById("score").innerText = "Score: " + score;

  // Save progress
  localStorage.setItem("quizScore", score);
}

function resetQuiz() {
  score = 0;
  document.getElementById("score").innerText = "Score: 0";
  localStorage.setItem("quizScore", score);
}

// Load saved score
window.onload = function () {
  let saved = localStorage.getItem("quizScore");
  if (saved) {
    score = saved;
    document.getElementById("score").innerText = "Score: " + score;
  }
};