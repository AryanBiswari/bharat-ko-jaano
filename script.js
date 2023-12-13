// const welcomeElement = document.getElementById('question');
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const showAnsBtn = document.getElementById("show-ans-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const roundList = document.getElementById("round-list");
const previousQuestionBtn = document.getElementById("previous-question-btn");
const correctPath = "assets/correct.png";
const hidePath = "assets/hide.png";

const sidebarRounds = [
  "default",
  "elimination",
  "passing",
  "group",
  "picture",
  "pictureA",
  "pictureB",
  "pictureC",
  "pictureD",
  "pictureE",
  "pictureF",
  "video",
  "videoA",
  "videoB",
  "videoC",
  "videoD",
  "videoE",
  "videoF",
  "audio",
  "audioA",
  "audioB",
  "audioC",
  "audioD",
  "audioE",
  "audioF",
  "fastest",
  "box",
  "patianceA",
  "patianceB",
  "patianceC",
  "patianceD","patianceE",
  "patianceF","khelA","khelB","khelC","khelD","khelE","khelF","rajnitiiA","rajnitiiB","rajnitiiC","rajnitiiD","rajnitiiE","rajnitiiF",
];
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-menu");
  const menuIcon = document.getElementById("open-menu");

  toggleButton.addEventListener("click", function () {
    const navbar = document.getElementById("navbar");
    navbar.style.display =
      navbar.style.display === "none" || navbar.style.display === ""
        ? "block"
        : "none";

    // Dynamically change the image src
    if (menuIcon) {
      const currentSrc = menuIcon.getAttribute("src");
      const newSrc =
        currentSrc === "assets/menuIcon.png"
          ? "assets/closeIcon.png"
          : "assets/menuIcon.png";
      menuIcon.setAttribute("src", newSrc);
    }
  });
});

let timer;
let secondsRemaining;
let questions;
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    questions = data;
    initializeQuiz();
  })
  .catch((error) => console.error("Error loading JSON file:", error));

function initializeQuiz() {
  let currentRoundQuestions = [];
  let currentQuestionIndex = 0;
  let currentRoundId = "default"; // Default round ID

  // Add event listeners for the duration buttons
  const durationButtons = document.querySelectorAll('.duration-btn');
  durationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const duration = parseInt(button.dataset.seconds, 10);
      startReverseTimer(duration);
    });
  });

  function startReverseTimer(duration) {
    clearInterval(timer); // Clear any existing timers
    secondsRemaining = duration;

    // Update the timer display (you can modify this part based on your UI)
    updateTimerDisplay();

    timer = setInterval(() => {
      secondsRemaining--;

      if (secondsRemaining >= 0) {
        // Update the timer display
        updateTimerDisplay();
      } else {
        // Timer has reached 0, do something (e.g., show answer or next question)
        clearInterval(timer);
        // Add your logic here when the timer reaches 0
        // For example, show answer, move to the next question, etc.
        // showAnswer();
        hideTimerDisplay();
        // You can also reset the timer for the next question if needed
        // startReverseTimer(duration);
        // clearInterval(timer);
      }
    }, 1000);
    // clearInterval(timer);
  }

  function updateTimerDisplay() {
    // Update your UI to display the current time (secondsRemaining)
    // You can modify this part based on your UI
    document.getElementById('timeout-text').innerHTML = `Time remaining is ${secondsRemaining}`;
    // console.log(secondsRemaining);
  }
  function hideTimerDisplay() {
    // Add code to hide or clear the timer display
    document.getElementById('timeout-text').innerHTML = ''; // Clear the content
    // You can also hide the element or perform other actions as needed
    // document.getElementById('timeout-text').style.display = 'none';
  }

  function pauseTimer() {
    clearInterval(timer);
  }

  // Add an event listener to the "Show Answer" button
  showAnsBtn.addEventListener('click', () => {
    pauseTimer();
    showAnswer();
  });

  function showRoundQuestions(roundId) {
    currentQuestionIndex = 0;
    currentRoundQuestions = questions.questions.filter(
      (q) => q.round === roundId
    );

    if (currentRoundQuestions.length > 0) {
      showQuestion(currentQuestionIndex);
      nextQuestionBtn.style.display = "block";
    } else {
      displayRoundCompleted();
    }
  }
  function showQuestion(index) {
    const currentQuestion = currentRoundQuestions[index];
    // Rest of the code for showing the question...
    questionText.textContent = currentQuestion.question;

    if (currentQuestion.format === "image") {
      questionText.innerHTML = `<p class="questionPara">${currentQuestion.questionContent}</p><img src="${currentQuestion.question}" alt="Question Image">`;
    } else if (currentQuestion.format === "audio") {
      questionText.innerHTML = `<p class="questionPara">${currentQuestion.questionContent}</p><audio controls><source src="${currentQuestion.question}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
    } else if (currentQuestion.format === "video") {
      questionText.innerHTML = `<p class="questionPara">${currentQuestion.questionContent}</p><video controls poster="images/poster.jpg"><source src="${currentQuestion.question}" type="video/mp4">Your browser does not support the video element.</video>`;
    }

    answerText.textContent = currentQuestion.answer;
    answerText.classList.add("hidden");
    showAnsBtn.innerHTML = `<img src="${correctPath}" alt="correct">`;
  }

  function showAnswer() {
    // Rest of the code for showing the answer...
    answerText.classList.toggle("hidden");
    // showAnsBtn.textContent = answerText.classList.contains("hidden")
    //   ? "Show Answer"
    //   : "Hide Answer";
    showAnsBtn.innerHTML = answerText.classList.contains("hidden") ? `<img src="${correctPath}" alt="correct">` : `<img src="${hidePath}" alt="hide">`
  }

  function displayRoundCompleted() {
    questionText.textContent = "This round has been completed.";
    answerText.textContent = "";
    showAnsBtn.style.display = "none";
    nextQuestionBtn.style.display = "none";
  }

  // Event listeners...
  // showAnsBtn.addEventListener("click", showAnswer);
  nextQuestionBtn.addEventListener("click", () => {
    // Rest of the code for moving to the next question...
    if (currentQuestionIndex < currentRoundQuestions.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      questionText.textContent = "This round has been completed.";
      answerText.textContent = "";
      showAnsBtn.innerHTML = `<img src="${correctPath}" alt="correct">`;
      answerText.classList.add("hidden");
    }
  });
  // Event listener for moving to the previous question
  previousQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion(currentQuestionIndex);
    }
  });

  document.addEventListener("keydown", function (event) {
    // Rest of the code for handling key events...
    // Right arrow key
    if (event.key === "ArrowRight") {
      if (currentQuestionIndex < currentRoundQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      } else {
        questionText.textContent = "This round has been completed.";
        answerText.textContent = "";
        showAnsBtn.innerHTML = `<img src="${correctPath}" alt="correct">`;
        answerText.classList.add("hidden");
      }
    }
    // Left arrow key
    else if (event.key === "ArrowDown") {
      showAnswer();
    } else if (event.key === "ArrowLeft") {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
      }
    }
  });

  roundList.addEventListener("click", (event) => {
    // Rest of the code for handling round list clicks...
    const target = event.target;

    if (target.tagName === "A") {
      const roundId = target.getAttribute("href").substring(1);

      if (questions && Array.isArray(questions.questions)) {
        // Check if the selected round ID is present in the questions array
        const validRound = questions.questions.some((q) => q.round === roundId);

        if (validRound) {
          currentRoundId = roundId;
          showRoundQuestions(currentRoundId);
          event.preventDefault();
        } else {
          console.error(`Invalid round ID: ${roundId}`);
        }
      } else {
        console.error("Invalid or missing questions array in the JSON file.");
      }
    }
  });

  // Initialize default round and questions
  showRoundQuestions(currentRoundId);
}
