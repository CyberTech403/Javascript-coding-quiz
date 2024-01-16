document.addEventListener("DOMContentLoaded", function () {
  const highScoresList = document.getElementById("highscores");
  const clearButton = document.getElementById("clear");

  displayHighScores();

  clearButton.addEventListener("click", clearHighScores);

  function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScoresList.innerHTML = highScores
      .map((score, index) => `<li> ${score.initials} = ${score.score}</li>`)
      .join("");
  }

  function clearHighScores() {
    localStorage.removeItem("highScores");
    displayHighScores();
  }
});
