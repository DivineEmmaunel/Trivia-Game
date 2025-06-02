// const { HashRouter } = require("react-router-dom");

const questions =
[
  {
    "question": "What is the value of 7 + 6 × 2?",
    "options": ["26", "19", "20", "13"],
    "answer": "19"
  },
  {
    "question": "Simplify: 3(x – 2) + 4(x + 5)",
    "options": ["7x + 14", "7x – 13", "x + 13", "x – 13"],
    "answer": "7x + 14"
  },
  {
    "question": "Solve: 2x – 5 = 11",
    "options": ["3", "6", "8", "4"],
    "answer": "8"
  },
  {
    "question": "Find the LCM of 12 and 18.",
    "options": ["36", "24", "18", "12"],
    "answer": "36"
  },
  {
    "question": "What is the square root of 121?",
    "options": ["10", "11", "12", "13"],
    "answer": "11"
  },
  {
    "question": "Evaluate: (2/3) ÷ (4/5)",
    "options": ["10/12", "8/15", "15/8", "5/6"],
    "answer": "5/6"
  },
  {
    "question": "If 3x = 27, what is the value of x?",
    "options": ["6", "7", "8", "9"],
    "answer": "9"
  },
  {
    "question": "Convert 0.75 to a fraction.",
    "options": ["3/4", "1/2", "2/3", "1/4"],
    "answer": "3/4"
  },
  {
    "question": "A triangle has angles 40° and 70°. What is the third angle?",
    "options": ["50°", "60°", "70°", "80°"],
    "answer": "70°"
  },
  {
    "question": "What is the mean of 2, 4, 6, 8, 10?",
    "options": ["6", "5", "8", "7"],
    "answer": "6"
  },
  {
    "question": "Find the area of a circle with radius 7 cm (use π = 22/7).",
    "options": ["154 cm²", "144 cm²", "128 cm²", "132 cm²"],
    "answer": "154 cm²"
  },
  {
    "question": "Solve: 5y – 3 = 2y + 6",
    "options": ["y = 3", "y = 4", "y = 5", "y = 2"],
    "answer": "y = 3"
  },
  {
    "question": "Factorize: x² + 5x + 6",
    "options": ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x – 2)(x – 3)", "(x – 1)(x – 6)"],
    "answer": "(x + 2)(x + 3)"
  },
  {
    "question": "What is the volume of a cube with side 5 cm?",
    "options": ["25 cm³", "100 cm³", "125 cm³", "150 cm³"],
    "answer": "125 cm³"
  },
  {
    "question": "A bag contains 3 red and 2 blue balls. What is the probability of picking a red ball?",
    "options": ["2/5", "3/5", "1/2", "4/5"],
    "answer": "3/5"
  },
  {
    "question": "What is the perimeter of a rectangle with length 8 cm and breadth 3 cm?",
    "options": ["22 cm", "24 cm", "26 cm", "28 cm"],
    "answer": "22 cm"
  },
  {
    "question": "Convert 2.5 hours to minutes.",
    "options": ["120", "135", "140", "150"],
    "answer": "150"
  },
  {
    "question": "Find the simple interest on ₦2000 for 3 years at 5% per annum.",
    "options": ["₦200", "₦300", "₦250", "₦150"],
    "answer": "₦300"
  },
  {
    "question": "Find the next number in the sequence: 2, 4, 8, 16, __?",
    "options": ["18", "24", "32", "30"],
    "answer": "32"
  },
  {
    "question": "Solve for x: x² = 49",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  }
]


// // your game code goes here
const getName = document.getElementById("nameInput");
const toGreet = document.getElementById("greetingText");


// document.querySelector(".quizSection").style.display ="none";
document.getElementById("nameForm").addEventListener("submit", function(e){
    e.preventDefault();
    const nameValue = getName.value;
    toGreet.textContent = `Hello ${nameValue}`;
    //   show greeting section and hide landing page
    document.getElementById("landing-page").style.display ="none";
    
    document.getElementById("greeting").style.display ="block";
});

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("greeting").style.display ="none";
    document.getElementById("quizSection").style.display ="block";
    
    showNextQuestion()
}


function showNextQuestion() {
    const questionElement = document.getElementById("questionText");
    const optionElement =document.getElementById("optionList");
    const correctDisplay = document.getElementById("correctAnswer")
    const scoreDisplay = document.getElementById("scoreDisplay");
    const nextButton = document.getElementById("nextButton")

    if (currentQuestionIndex >= questions.length){
        console.log("Quiz finished, showing score");
        questionElement.textContent = '🎉 Quiz Finished!';
        optionElement.innerHTML = '';
        correctDisplay.textContent = '';
        nextButton.style.display = 'none';

        scoreDisplay.textContent = `Your Score: ${score}/${questions.length}`;
        scoreDisplay.style.display= 'block';
        return;
    }

    // Quiz still ongoing
    scoreDisplay.style.display = 'none'; // hide score until end
    optionElement.innerHTML ="";
    correctDisplay.textContent = "";

    const current = questions[currentQuestionIndex];

    questionElement.textContent = current.question;

    current.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `
        <label>
            <input type= "radio" name="option" value="${option}">
            ${option}
        </label>
        `;

        optionElement.appendChild(li);
    });
   
   }

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const correctDisplay = document.getElementById("correctAnswer");

    if (!selectedOption) {
        alert("Please select an answer before continuing.");
        return;
    }

    const answer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answer === correctAnswer) {
        score++;
        correctDisplay.textContent = "✅ Correct!";
    } else {
        correctDisplay.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
    }

    currentQuestionIndex++;

    // Wait 1.2 seconds before showing the next question
    setTimeout(showNextQuestion, 1000);
}

