const quizData = [
    {
        "question": "What is the capital of France?",
        "options": ["Paris", "London", "Berlin", "Madrid"],
        "correctAnswer": "Paris"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Venus", "Jupiter"],
        "correctAnswer": "Mars"
    },
    {
        "question": "Who founded Amazon?",
        "options": ["Bill gates", "Elon Musk", "Jeff Bezos", "Led Zeppelin"],
        "correctAnswer": "Jeff Bezos"
    },
    {
        "question": "What is the currency of Denmark?",
        "options": ["Ruppes", "Dhaka", "Euro", "Danish Krone"],
        "correctAnswer": "Danish Krone"
    },
    {
        "question": "What is the chemical symbol for water?",
        "options": ["H2O", "H2", "CO2", "O2"],
        "correctAnswer": "H2O"
    }
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', checkAnswer);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(e) {
    const selectedOption = e.target.innerText;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

loadQuestion();