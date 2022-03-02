const quizht = [
    {
        question : "Q.1 : What is the full form of HTML?" ,
        a : "Hyper Text Markup Language" ,
        b : "High Tag Markup Language" ,
        c : "Hyper Tag Markup Language" ,
        d : "None of the above" ,
        ans : "ans1"
    },
    {
        question : "Q.2 : Which HTML tag is used to take input from users?" ,
        a : "<button>" ,
        b : "<title>" ,
        c : "<body>" ,
        d : "<input>" ,
        ans : "ans4" 
    },
    {
        question : "Q.3 : What is the use of <hr> tag?" ,
        a : "to draw a picture" ,
        b : "to make a shape" ,
        c : "to draw a horizontal line" ,
        d : "to make a heading" ,
        ans : "ans3"
    },
    {
        question : "Q.4 : Which HTML tag is used to make an ordered lists?" ,
        a : "<ul>" ,
        b : "<li>" ,
        c : "<td>" ,
        d : "<ol>" ,
        ans : "ans4"
    }
]

const ques = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let quescount = 0 ;
let  score = 0;

const loadquestion = () => {
    const ques1 = quizht[quescount];
    ques.innerText = ques1.question;
    option1.innerText = ques1.a;
    option2.innerText = ques1.b;
    option3.innerText = ques1.c;
    option4.innerText = ques1.d;
}

loadquestion();

const getcheckans = () => {
    let Ans;
    answers.forEach((currAns) => {
        if (currAns.checked) {
            Ans = currAns.id;
        }
    });
    return Ans;
}

const deselect = () => {
    answers.forEach((currAns) => { currAns.checked=false; });
}

submit.addEventListener('click', () => {
    const checkanswer = getcheckans();
    console.log(checkanswer);

    if(checkanswer === quizht[quescount].ans){
        score++;
    }
    
    quescount++;

    deselect();

    if(quescount<quizht.length){
        loadquestion();
    }else{
        showscore.innerHTML = `
        <h3>You Scored = ${score}/${quizht.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showscore.classList.remove('scoreadda');
    }
})
