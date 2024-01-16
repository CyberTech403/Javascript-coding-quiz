import questions from "./JS/questions.js";

document.addEventListener("DOMContentLoaded", function () {
  
  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let timerInterval;

  const correctAudio = new Audio("./sfx/correct.wav");
  const incorrectAudio = new Audio("./sfx/incorrect.wav");
  const startButton = document.getElementById("start");
  const timerElement = document.getElementById("time");
  const questionTitleElement = document.getElementById("question-title");
  const choicesElement = document.getElementById("choices");
  const feedbackElement = document.getElementById("feedback");
  const endScreenElement = document.getElementById("end-screen");
  const initialsInput = document.getElementById("initials");
  const submitButton = document.getElementById("submit");
  const finalScoreElement = document.getElementById("final-score");

  startButton.addEventListener("click", startQuiz);
  choicesElement.addEventListener("click", handleChoiceClick);
  submitButton.addEventListener("click", saveScore);

  function startQuiz() {
    startButton.parentNode.classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    startTimer();
    displayQuestion();
  }

  function displayQuestion() {
    const { question, choices } = questions[currentQuestionIndex];
    questionTitleElement.textContent = question;
    choicesElement.innerHTML = choices.map(createChoiceButton).join("");
  
    const choicesContainer = document.getElementById("choices");
    choicesContainer.classList.remove("correct", "wrong");
  
  }

  function createChoiceButton(choice) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    return choiceButton.outerHTML;
  }

  function handleChoiceClick(event) {
    if (event.target.matches("button")) {
      checkAnswer(event.target.textContent);
    }
  }

function checkAnswer(userChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = userChoice === currentQuestion.correctAnswer;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.classList.remove("correct", "wrong");

  if (isCorrect) {
    choicesContainer.classList.add("correct");
  } else {
    choicesContainer.classList.add("wrong");
    timeLeft -= 1;
  }

  feedbackElement.textContent = isCorrect ? "Correct!" : "Wrong!";
  playAudio(isCorrect ? correctAudio : incorrectAudio);

  feedbackElement.classList.remove("hide");
  setTimeout(() => {
    feedbackElement.classList.add("hide");
    nextQuestion();
  }, 1000);
}
  
  function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("questions").classList.add("hide");
    endScreenElement.classList.remove("hide");
    finalScoreElement.textContent = timeLeft;
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;

      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }

  function saveScore() {
    const initials = initialsInput.value.trim();

    if (initials !== "") {
      const score = timeLeft;
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      const newScore = { initials, score };

      highScores.push(newScore);
      highScores.sort((a, b) => b.score - a.score);

      localStorage.setItem("highScores", JSON.stringify(highScores));

      window.location.href = "highscores.html";
    }
  }

  function playAudio(audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
  }
});
