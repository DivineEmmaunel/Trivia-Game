
const questions = [
    {
        question: "What is the value of 7 + 6 × 2?",
        options: ["26", "19", "20", "13"],
        answer: "19"
    },
    {
        question: "Simplify: 3(x – 2) + 4(x + 5)",
        options: ["7x + 14", "7x – 13", "x + 13", "x – 13"],
        answer: "7x + 14"
    },
    {
        question: "Solve: 2x – 5 = 11",
        options: ["3", "6", "8", "4"],
        answer: "8"
    },
    {
        question: "Find the LCM of 12 and 18.",
        options: ["36", "24", "18", "12"],
        answer: "36"
    },
    {
        question: "What is the square root of 121?",
        options: ["10", "11", "12", "13"],
        answer: "11"
    },
    {
        question: "Evaluate: (2/3) ÷ (4/5)",
        options: ["10/12", "8/15", "15/8", "5/6"],
        answer: "5/6"
    },
    {
        question: "If 3x = 27, what is the value of x?",
        options: ["6", "7", "8", "9"],
        answer: "9"
    },
    {
        question: "Convert 0.75 to a fraction.",
        options: ["3/4", "1/2", "2/3", "1/4"],
        answer: "3/4"
    },
    {
        question: "A triangle has angles 40° and 70°. What is the third angle?",
        options: ["50°", "60°", "70°", "80°"],
        answer: "70°"
    },
    {
        question: "What is the mean of 2, 4, 6, 8, 10?",
        options: ["6", "5", "8", "7"],
        answer: "6"
    },
    {
        question: "Find the area of a circle with radius 7 cm (use π = 22/7).",
        options: ["154 cm²", "144 cm²", "128 cm²", "132 cm²"],
        answer: "154 cm²"
    },
    {
        question: "Solve: 5y – 3 = 2y + 6",
        options: ["y = 3", "y = 4", "y = 5", "y = 2"],
        answer: "y = 3"
    },
    {
        question: "Factorize: x² + 5x + 6",
        options: [
            "(x + 2)(x + 3)",
            "(x + 1)(x + 6)",
            "(x – 2)(x – 3)",
            "(x – 1)(x – 6)"
        ],
        answer: "(x + 2)(x + 3)"
    },
    {
        question: "What is the volume of a cube with side 5 cm?",
        options: ["25 cm³", "100 cm³", "125 cm³", "150 cm³"],
        answer: "125 cm³"
    },
    {
        question: "A bag contains 3 red and 2 blue balls. What is the probability of picking a red ball?",
        options: ["2/5", "3/5", "1/2", "4/5"],
        answer: "3/5"
    },
    {
        question: "What is the perimeter of a rectangle with length 8 cm and breadth 3 cm?",
        options: ["22 cm", "24 cm", "26 cm", "28 cm"],
        answer: "22 cm"
    },
    {
        question: "Convert 2.5 hours to minutes.",
        options: ["120", "135", "140", "150"],
        answer: "150"
    },
    {
        question: "Find the simple interest on ₦2000 for 3 years at 5% per annum.",
        options: ["₦200", "₦300", "₦250", "₦150"],
        answer: "₦300"
    },
    {
        question: "Find the next number in the sequence: 2, 4, 8, 16, __?",
        options: ["18", "24", "32", "30"],
        answer: "32"
    },
    {
        question: "Solve for x: x² = 49",
        options: ["5", "6", "7", "8"],
        answer: "7"
    }
];

// Get HTML elements
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");

const landingPage = document.getElementById("landing-page");
const greeting = document.getElementById("greeting");
const greetingText = document.getElementById("greetingText");

const quizSection = document.getElementById("quizSection");
const questionText = document.getElementById("questionText");
const optionList = document.getElementById("optionList");

const questionCounter = document.getElementById("questionCounter");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressBar = document.getElementById("progressBar");

const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

const resultSection = document.getElementById("resultSection");
const finalGreeting = document.getElementById("finalGreeting");
const finalScore = document.getElementById("finalScore");
const percentage = document.getElementById("percentage");
const resultMessage = document.getElementById("resultMessage");

// Game variables
let playerName = "";
let currentQuestionIndex = 0;
let score = 0;
let answerSubmitted = false;


// 1. Get player's name
nameForm.addEventListener("submit", function (event) {
    event.preventDefault();

    playerName = nameInput.value.trim();

    if (!playerName) {
        alert("Please enter your name.");
        return;
    }

    greetingText.textContent = `Hello, ${playerName}!`;
    
    landingPage.classList.add("hidden");
    greeting.classList.remove("hidden");
});


// 2. Start quiz
document.getElementById("startButton").addEventListener("click", function () {
    greeting.classList.add("hidden");
    quizSection.classList.remove("hidden");

    showQuestion();
});


// 3. Display question
function showQuestion() {

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    scoreDisplay.textContent = `Score: ${score}`;

    progressBar.style.width =
        `${(currentQuestionIndex / questions.length) * 100}%`;

    optionList.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "";

    answerSubmitted = false;

    nextButton.disabled = true;
    nextButton.textContent = "Check Answer";

    // Create answer options
    currentQuestion.options.forEach(function (option, index) {

        const label = document.createElement("label");
        label.classList.add("option");

        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "option";
        radio.value = option;

        radio.addEventListener("change", function () {

            // Remove previous selected styling
            document.querySelectorAll(".option").forEach(function (item) {
                item.classList.remove("selected");
            });

            label.classList.add("selected");
            nextButton.disabled = false;
        });

        const optionText = document.createElement("span");
        optionText.textContent = option;

        label.appendChild(radio);
        label.appendChild(optionText);

        optionList.appendChild(label);
    });
}


// 4. Check answer
nextButton.addEventListener("click", function () {

    // Prevent multiple submissions
    if (answerSubmitted) {

        currentQuestionIndex++;
        showQuestion();
        return;
    }

    const selectedOption = document.querySelector(
        'input[name="option"]:checked'
    );

    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        feedback.className = "error";
        return;
    }

    const correctAnswer = questions[currentQuestionIndex].answer;
    const userAnswer = selectedOption.value;

    answerSubmitted = true;

    // Disable all options after submission
    const allOptions = document.querySelectorAll('input[name="option"]');

    allOptions.forEach(function (option) {
        option.disabled = true;
    });

    // Check whether the answer is correct
    if (userAnswer === correctAnswer) {

        score++;

        feedback.textContent = "Correct! Well done. ✓";
        feedback.className = "success";

    } else {

        feedback.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
        feedback.className = "error";
    }

    scoreDisplay.textContent = `Score: ${score}`;

    // Highlight correct and wrong answers
    document.querySelectorAll(".option").forEach(function (label) {

        const radio = label.querySelector("input");

        if (radio.value === correctAnswer) {
            label.classList.add("correct");
        }

        if (radio.checked && radio.value !== correctAnswer) {
            label.classList.add("wrong");
        }
    });

    // Update button
    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "View Results"
            : "Next Question";
});


// 5. Display final results
function showResults() {

    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    const totalQuestions = questions.length;

    const resultPercentage = Math.round(
        (score / totalQuestions) * 100
    );

    finalGreeting.textContent = `Well done, ${playerName}!`;

    finalScore.textContent = `Your Score: ${score}/${totalQuestions}`;

    percentage.textContent = `${resultPercentage}%`;

    if (resultPercentage >= 80) {

        resultMessage.textContent = "Excellent performance! You're a math star! 🌟";

    } else if (resultPercentage >= 50) {

        resultMessage.textContent = "Good effort! Keep practising. 💪";

    } else {

        resultMessage.textContent = "Don't give up! Practice makes progress. 📚";
    }

    progressBar.style.width = "100%";
}


// 6. Restart game
document.getElementById("restartButton").addEventListener("click", function () {

    currentQuestionIndex = 0;
    score = 0;
    answerSubmitted = false;

    resultSection.classList.add("hidden");
    greeting.classList.remove("hidden");

    greetingText.textContent = `Welcome back, ${playerName}!`;

});
