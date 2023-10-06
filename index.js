const questions = [
    {
        question: "What does the 'E' stand for in the MERN stack?",
        answers: {
            A: 'ElasticSearch',
            B: 'Express.js',
            C: 'Ember.js',
            D: 'Elixir'
        },
        correctAnswer: "B"
    },
    {
        question: "Which component of the MERN stack is responsible for server-side logic and routing?",
        answers: {
            A: 'MongoDB',
            B: 'React',
            C: ' Node.js',
            D: 'Express.js'
        },
        correctAnswer: "D"
    },
    {
        question: "Which part of the MERN stack is used for building user interfaces and handling the client-side of web applications?",
        answers: {
            A: 'MongoDB',
            B: 'Express.js',
            C: 'React',
            D: 'Node.js'
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following databases is commonly used with the MERN stack for storing and retrieving data?",
        answers: {
            A: 'MySQL',
            B: 'PostgreSQL',
            C: 'MongoDB',
            D: 'SQLite'
        },
        correctAnswer: "C"
    },
    {
        question: "In the MERN stack, what is the primary purpose of Node.js?",
        answers: {
            A: 'Managing databases',
            B: 'Handling server-side logic',
            C: 'Building user interfaces',
            D: 'Handling client-side routing'
        },
        correctAnswer: "B"
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.querySelector(".options");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const questionnumber=document.getElementById("question-no")
const restart=document.getElementById("restart")

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionnumber.textContent=`Question ${currentQuestionIndex + 1}:`
    questionElement.textContent = `${currentQuestion.question}`;
    optionsContainer.innerHTML = "";

    for (const option in currentQuestion.answers) {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}) ${currentQuestion.answers[option]}`;
        optionsContainer.appendChild(label);
        // label.addEventListener('click',(e)=>{
        //     label.style.border='1px solid white'
        // })
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption){
        return
    };
    console.log(selectedOption)

    const selectedAnswer = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    selectedOption.checked = false;

    if (currentQuestionIndex < questions.length) {
       
            loadQuestion();
      
    } else {
        showScore();
    }
}

function showScore() {
    questionnumber.textContent=""
    questionElement.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    submitButton.style.display = "none";
    nextButton.style.display = "none";
    resultElement.textContent = `Your Score: ${score} / ${questions.length}`;
    scoreElement.textContent = "";
    restart.style.display="block"
}

function restartquestion(){
    currentQuestionIndex=0;
    score=0
    resultElement.textContent = ""
    submitButton.style.display = "inline";
    nextButton.style.display = "inline";
    restart.style.display="none"
    loadQuestion()
}



loadQuestion();

submitButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", ()=>{
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }

});

restart.addEventListener('click',restartquestion)