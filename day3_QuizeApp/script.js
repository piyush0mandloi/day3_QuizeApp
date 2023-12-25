const questions = [
    {
        question: "How many total number of states in India?",
        answers:[
            {text:"28",correct: false},
            {text:"29",correct: true},
            {text:"27",correct: false},
            {text:"26",correct: false},
        ]
    },
    {
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers:[
            {text:"Narmada",correct: true},
            {text:"Mahanadi",correct: false},
            {text:"Son",correct: false},
            {text:"Netravati",correct: false},
        ]
    },
    {
        question: "Golf player Vijay Singh belongs to which country?",
        answers:[
            {text:"India",correct: false},
            {text:"Fiji",correct: true},
            {text:"UK",correct: false},
            {text:"USA",correct: false},
        ]
    },
    {
        question: "Friction can be reduced by changing from?",
        answers:[
            {text:"rolling to sliding",correct: false},
            {text:"sliding to rolling",correct: true},
            {text:"dynamic to static",correct: false},
            {text:"PE to KE",correct: false},
        ]
    },
    {
        question: "FFC stands for",
        answers:[
            {text:"Federation of Football Council",correct: false},
            {text:"Film Finance Corporation",correct: true},
            {text:"Foreign Finance Corporation",correct: false},
            {text:"None of the above",correct: false},
        ]
    },
    {
        question: "The hottest planet in the solar system?",
        answers:[
            {text:"Mercury",correct: false},
            {text:"Venus",correct: true},
            {text:"Mars",correct: false},
            {text:"Jupiter",correct: false},
        ]
    },
    {
        question: "Tsunamis are not caused by",
        answers:[
            {text:"Hurricanes",correct: true},
            {text:"Earthquakes",correct: false},
            {text:"Undersea landslides",correct: false},
            {text:"Volcanic eruptions",correct: false},
        ]
    },
    {
        question: "The country that has the highest in Barley Production?",
        answers:[
            {text:"China",correct: false},
            {text:"India",correct: false},
            {text:"Russia",correct: true},
            {text:"France",correct: false},
        ]
    },
    {
        question: "Which one of the following rivers originates in Brahmagiri range of Western Ghats?",
        answers:[
            {text:"Pennar",correct: false},
            {text:"Cauvery",correct: true},
            {text:"Krishna",correct: false},
            {text:"Tapti",correct: false},
        ]
    },
    {
        question: "The metal whose salts are sensitive to light is?",
        answers:[
            {text:"Zinc",correct: false},
            {text:"Silver",correct: true},
            {text:"Copper",correct: false},
            {text:"Aluminim",correct: false},
        ]
    }
]
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0
    score =0
    nextButton.innerHTML= "Next"
    showQuestion()
}
function showQuestion() {

    resetState()

    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct 
        }
        button.addEventListener("click",selectAnswer)
    })

}

function resetState() {
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
        
    }
}

function selectAnswer(e) {
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++
    }   
    else{
        selectBtn.classList.add("incorrect")
    } 
    
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
        
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()