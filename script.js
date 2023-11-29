// const welcomeElement = document.getElementById('question');
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const showAnsBtn = document.getElementById("show-ans-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const roundList = document.getElementById("round-list");
const copyrightSymbol = document.getElementById("copyright-symbol");
const modal = document.getElementById("copyright-modal");
const closeModal = document.getElementById("close-modal");

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
  "patianceD",
  "patianceE",
  "patianceF",
  "khelA",
  "khelB",
  "khelC",
  "khelD",
  "khelE",
  "khelF",
  "rajnitiiA",
  "rajnitiiB",
  "rajnitiiC",
  "rajnitiiD",
  "rajnitiiE",
  "rajnitiiF",
];
document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementById("toggle-menu");
  var navbar = document.getElementById("navbar");

  toggleButton.addEventListener("click", function() {
      navbar.style.display = (navbar.style.display === "none" || navbar.style.display === "") ? "block" : "none";
  });
});

let questions;
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    // Assuming your JSON structure has a 'questions' property
    questions = data;

    let currentRoundQuestions = [];
    let currentQuestionIndex = 0;
    let currentRoundId = "default"; // Default round ID

    // Function to show questions for the selected round
    function showRoundQuestions(roundId) {
      currentQuestionIndex = 0;
      currentRoundQuestions = questions.questions.filter(
        (q) => q.round === roundId
      );

      if (currentRoundQuestions.length > 0) {
        showQuestion(currentQuestionIndex);
        showAnsBtn.style.display = "block";
        nextQuestionBtn.style.display = "block";
      } else {
        questionText.textContent = "This round has been completed.";
        answerText.textContent = "";
        showAnsBtn.style.display = "none";
        nextQuestionBtn.style.display = "none";
      }
    }

    // Function to show a specific question and its answer
    function showQuestion(index) {
      const currentQuestion = currentRoundQuestions[index];
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
      showAnsBtn.textContent = "Show Answer";
    }

    // Function to toggle answer visibility
    function showAnswer() {
      answerText.classList.toggle("hidden");
      showAnsBtn.textContent = answerText.classList.contains("hidden")
        ? "Show Answer"
        : "Hide Answer";
    }

    // Event listener for showing answer
    showAnsBtn.addEventListener("click", showAnswer);

    // Event listener for moving to the next question
    nextQuestionBtn.addEventListener("click", () => {
      if (currentQuestionIndex < currentRoundQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      } else {
        questionText.textContent = "This round has been completed.";
        answerText.textContent = "";
        showAnsBtn.textContent = "Show Answer";
        answerText.classList.add("hidden");
      }
    });

    roundList.addEventListener("click", (event) => {
      const target = event.target;
    
      if (target.tagName === "A") {
        const roundId = target.getAttribute("href").substring(1);
    
        if (questions && Array.isArray(questions.questions)) {
          // Check if the selected round ID is present in the questions array
          const validRound = questions.questions.some(q => q.round === roundId);
    
          if (validRound) {
            currentRoundId = roundId;
            showRoundQuestions(currentRoundId);
            event.preventDefault();
          } else {
            console.error(`Invalid round ID: ${roundId}`);
          }
        } else {
          console.error('Invalid or missing questions array in the JSON file.');
        }
      }
    });

    // Initialize default round and questions
    showRoundQuestions(currentRoundId);
  })
  .catch((error) => console.error("Error loading JSON file:", error));
