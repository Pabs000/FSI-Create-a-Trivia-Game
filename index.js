

// Your Code Here
let userName = window.prompt('Pablo:')
let userScore = 0
let playAgain = true

function playGame () {
for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
    {
        text: `What is the first book of the Old Testament?
        A. Leviticus
        B. Numbers
        C. Genesis
        D. Exodus`,
        correctAnswer: "C"
        text: `What is the first letter of the alphabet?
        A. A
        B. B
        C. C
        D. D,
        correctAnswer: "A"
        text: `What is the first book of the Old Testament?
        A. Leviticus
        B. Numbers
        C. Genesis
        D. Exodus`,
        correctAnswer: "C"
        text: `What is the first book of the Old Testament?
        A. Leviticus
        B. Numbers
        C. Genesis
        D. Exodus`,
        correctAnswer: "C"

    }
}

window.alert('Your score is: '+userScore)

}

while (playAgain === true) {
playGame()
let userChoice = window.prompt('Would you like to play the game again? Answer yer or no.')
if(userChoice --- 'yes'){
    playAgain = true 
}
else{ 
playAgain = false 
window.alert('Thanks for playing the game!')
}

}
