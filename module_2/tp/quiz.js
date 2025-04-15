export class Quiz {

    constructor() {
        this.questions = []
        this.score = 0
        this.index = 0
    }

    displayQuestion(question) {
        document.getElementById('quiz').innerHTML = ""
        document.getElementById('quiz').append(question.getQuestionHTML())
    }

    addQuestion(question){
        this.questions.push(question)
    }

    displayScore(){
        document.getElementById('quiz').innerText = `Votre score : ${this.score}/${this.questions.length}`
    }

    collectAnswer(){

        let answer = document.querySelector("input[name='answer']:checked")

        if(answer){

            if(answer.value == this.questions[this.index].correctAnswer){
                this.score++
            }
            this.index++

            if(this.index <  this.questions.length){
                this.displayQuestion(this.questions[this.index])
            }else{
                this.displayScore()
            }
        }
    }
}