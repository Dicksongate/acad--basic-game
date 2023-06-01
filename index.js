const num1 = Math.ceil(Math.random()*12);
const num2 = Math.ceil(Math.random()*12);

const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score"); 
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
let score = JSON.parse(localStorage.getItem("score"));


if(!score){
    score = 0;
}
scoreEl.innerText = `score : ${score}`


const question1 = document.getElementById("question")
question1.innerText = `what is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2

formEl.addEventListener("submit", ()=>{
    const userans = +inputEl.value;
   if(userans === correctAns) {
       score++ 
       updateLocalstorage()   

   }else{
    score--
    updateLocalstorage()
   }

})

function updateLocalstorage(){
     localStorage.setItem("score", JSON.stringify(score))
}



