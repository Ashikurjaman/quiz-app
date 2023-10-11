const question = [
    {
        question:"Which is largest animale in the world",
        answers:[
            {
                text:'Shark',correct:false
            },
            {
                text:'Blue Whale',correct:true
            },
            {
                text:'Elephant',correct:false
            },
            {
                text:'Giraffe',correct:false
            },
        ]
    },
    {
        question:"Which is smallest country in the world",
        answers:[
            {
                text:'Vatican city',correct:true
            },
            {
                text:'Bhutan',correct:false
            },
            {
                text:'Nepal',correct:false
            },
            {
                text:'Sir-lanka',correct:false
            },
        ]
    },
    {
        question:"Which is largest desert in the world",
        answers:[
            {
                text:'Kalahari',correct:false
            },
            {
                text:'Gobi',correct:false
            },
            {
                text:'Sahara',correct:false
            },
            {
                text:'Antarctica',correct:true
            },
        ]
    },
    {
        question:"Which is smallest  continent in the world",
        answers:[
            {
                text:'Asia',correct:false
            },
            {
                text:'Australia',correct:true
            },
            {
                text:'Arctic',correct:false
            },
            {
                text:'Africa',correct:false
            },
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex= 0;
    score=0;
    nextBtn.innerHTML='Next';
    showQuiz();
}

function showQuiz(){
    
    let currentQuestiion =question[currentQuestionIndex];

    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestiion.question;

    currentQuestiion.answers.forEach(answers=>{
        const button = document.createElement('button');
        button.innerHTML=answers.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click',selectAnswer)
    });
}

function resetState() {
    nextBtn.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;

    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
            button.style.display ="none";
        }
        button.disabled = true;
        button.style.display ="none";
        
    });
    nextBtn.style.display ="block";
    
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${question.length}!`;
    nextBtn.innerHTML = "play Again";
    nextBtn.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < question.length){
        showQuiz();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();