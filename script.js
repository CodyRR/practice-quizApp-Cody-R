
const questions = [

    {question: "Question 1. Which option in a String?", 
    answers: ["'4.2'","true","Undefined","10"],
    correct: 0},

    {question: "Question 2. Which attribute will change the font color?", 
    answers: ["background","color","background-color","border"],
    correct: 1},

    {question: "Question 3. let colors = ['red', 'blue', 'green', 'yellow']; Which will color[1] access?", 
    answers: ["'red'","'blue'","'green'","'yellow'"],
    correct: 1},

    {question: "Question 4. Which option is considered falsy?", 
    answers: ["0","'false'","1","true"],
    correct: 0},

    {question: "Question 5. for(let i = 0; i < 4; i++)   How many times does this for loop run?", 
    answers: ["1 time","2 times","3 times","4 times"],
    correct: 3},

    {question: "Question 6. Which is not an event listener?", 
    answers: ["'click'","mousepress","mouseover","mouseout"],
    correct: 1},

];

let currentQuestionIndex = 0;
const mainQuestion = document.getElementById("main-question");
const answerButtons = document.querySelectorAll(".answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");



loadingQuestion();

function loadingQuestion(){

    const currentQuestion = questions[currentQuestionIndex];

    mainQuestion.textContent = currentQuestion.question;

    answerButtons.forEach((button , index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
    })

    feedback.textContent = "";

    nextButton.disabled = true;
}

function handleClick(index){

    const current = questions[currentQuestionIndex].correct;
    if(index === current){
        feedback.textContent = "Correct";
    } else {
        feedback.textContent = "Incorrect";
    }

    answerButtons.forEach((button) => {
        button.disabled = true;
    });

    nextButton.disabled = false;
}

answerButtons.forEach((button , index) => {
        button.addEventListener("click", () => {handleClick(index)});
});

nextButton.addEventListener("click", () => {

    currentQuestionIndex++;
    if(questions.length > currentQuestionIndex){
        loadingQuestion();
    } else {
        feedback.textContent = "You have completed the quiz";
        nextButton.disabled = true;
    }
})