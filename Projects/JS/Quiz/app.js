quiz = [
    {
        question : "What is my name?",
        answers : {
            a: "Khaled",
            b: "Shoibal"
        },
        correctAns: "a",
        qno: "1"
    },
    {
        question: "How old are you?",
        answers: {
            a: 22,
            b: 23,
            c: 24
        },
        correctAns: "b",
        qno: "2"
    },
    {
        question: "what is the meaning of life?",
        answers: {
            a: "IDK",
            b: "Happiness",
            c: "Work till you die"
        },
        correctAns: "a",
        qno: "3"
    },
    {
        question: "What will your last words be?",
        answers: {
            a: "Goodbye",
            b: "Love your friends and family",
            c: "Finally"
        },
        correctAns: "b",
        qno: "4"
    },
    {
        question: "What is the meaning of Enwahh?",
        answers: {
            a: "God",
            b: "Outsider",
            c: "Stranger"
        },
        correctAns: "c",
        qno: "5"
    },
    {
        question: "What is the best time to die?",
        answers: {
            a: "When you are ready",
            b: "Never",
            c: "Tonight"
        },
        correctAns: "a",
        qno: "6"
    },
    {
        question: "What superpower would you have?",
        answers: {
            a: "Poop smells like roses",
            b: "You pee tastes like the necter of Gods",
            c: "You laugh when you are sad"
        },
        correctAns: "b",
        qno: "7"
    },
    {
        question: "Who is better?",
        answers: {
            a: "The person you want to be",
            b: "The person who are",
            c: "The person you were"
        },
        correctAns: "b",
        qno: "8"
    }
]

let score = 0;
const section = document.querySelector('.section');


// Display question
function displayQuestion(choice){
    const qsection = document.createElement('div')
    section.appendChild(qsection);

    const option = document.createElement('h2');
    option.innerText = choice.question;
    qsection.appendChild(option);
}

// Display answer
function displayAnswer(choice){
    for(const ans in choice.answers){
        const asection = document.createElement('div')
        section.appendChild(asection);
        const br = document.createElement('br')

        answer = document.createElement('input')
        answer.setAttribute("type", "radio");
        answer.setAttribute("name", choice.qno);
        answer.setAttribute("value", `${ans}`)
        answer.setAttribute("id", `${ans}`) 
        label = document.createElement("LABEL");
        label.setAttribute("class", "mb-2");
        label.innerText = choice.answers[ans];
        
        asection.appendChild(answer);
        asection.appendChild(label);
        asection.appendChild(br)
    }
}

// Build quiz
function buildQuiz(quiz){
    for(let i=0; i<quiz.length; i++){
        displayQuestion(quiz[i]);
        displayAnswer(quiz[i]);
    }
    
}

console.log(quiz.correctAns);

// Calculate answer
function calculate(){
    for(let i=0; i<quiz.length; i++){
        for(ans in quiz[i].answers){
            // console.log(document.querySelector(`#${ans}`).value);
            // console.log(quiz[i].correctAns);
            
            if(document.querySelector(`#${ans}`).value === quiz[i].correctAns){
                score += 1
            }
        }
    }
    viewScore()
}

function viewScore(){
    const result = document.createElement('h1');
    result.innerHTML = score;
    section.append(result);
}

buildQuiz(quiz);

const btn = document.createElement('button');

btn.innerText = "Submit";
btn.setAttribute("type", "button")
btn.setAttribute("class", "btn btn-primary mt-3 mb-3")
btn.addEventListener('click', calculate)

section.appendChild(btn)
