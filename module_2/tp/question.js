export class Question {

    constructor(label, answers, correctAnswer) {
        this.label = label
        this.answers = answers
        this.correctAnswer = correctAnswer
    }

    getQuestionHTML() {

        const divLabel = document.createElement('div')
        const divAnswers = document.createElement('div')
        const divContainer = document.createElement('div')

        divLabel.innerText = this.label
        divContainer.append(divLabel)

        this.answers.forEach(function (val, idx) {

            const input = document.createElement('input')
            input.type = 'radio'
            input.name = 'answer'
            input.value = idx
            input.id = idx

            divAnswers.append(input)

            const label = document.createElement('label')
            label.innerText = val
            label.setAttribute('for', idx)
            divAnswers.append(label)

        })

        divContainer.append(divAnswers)
        return divContainer
    }

}