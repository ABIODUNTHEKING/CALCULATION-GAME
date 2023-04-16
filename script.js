//VARIABLES
const num1 = Math.floor(Math.random() * (20 - 0 + 1)) + 0

const num2 = Math.floor(Math.random() * (20 - 0 + 1)) + 0
const question = document.getElementById("question")
let currentScore = document.getElementById('score')
const input = document.getElementById('input')
const form = document.getElementById("form")
const button = document.getElementById('btn')
const operation = ["multiply", "plus", "subtract", "divide"]

let randomSelection = Math.floor(Math.random() * operation.length)

let selectedOpration = operation[randomSelection]


//DOM MANIPULATION
question.innerText = `What is ${num1} ${selectedOpration} ${num2}?`


//EVENT LISTENER
let correctValue

if(selectedOpration == "multiply"){
     correctValue = num1 * num2
}
else if(selectedOpration == "plus"){
    correctValue = num1 + num2
}
else if(selectedOpration == "subtract"){
    correctValue = num1 - num2
    if(num1 < num2){
        window.location.reload()   
    }
}
else{
    correctValue = num1 / num2
    if(num1 < num2){
        window.location.reload()   
    }
    else if(num1 % num2 != 0){
        window.location.reload() 
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let score

    let userAnswer = +input.value
    if(correctValue == userAnswer){
        let previousScore = JSON.parse(localStorage.getItem('score'))
        score = previousScore + 1
        localStorage.setItem("score", JSON.stringify(score))
        window.location.reload()        
    }   

    else{
        let previousScore = JSON.parse(localStorage.getItem('score'))
        score = previousScore - 1
        if(score < 0){
            score+=1
        }
        localStorage.setItem("score", JSON.stringify(score))
        window.location.reload()
        }
    }
)


let score = JSON.parse(localStorage.getItem('score'))
currentScore.innerText = `Score: ${score}`



