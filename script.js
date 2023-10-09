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
                text:'Gobi',correct:true
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
        answerButton.appendChild(button)
    });
}

function resetState() {
    nextBtn.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();