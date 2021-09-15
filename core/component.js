export class Component {
    constructor(btn) {
        this.$btn = document.querySelector(btn)
        this.init()
    }

    init(){}

    validation(input, dataName) {
        const dictionary = {
            title: 3,
            text: 10
        }

        let inputLength = input.value.length
        let typeInput = input.dataset[dataName]
    
        if (typeInput in dictionary) {
            let span = `<span>Type more symbols! (${dictionary[typeInput]})</span>`
            if (inputLength < dictionary[typeInput]) {
                let child = input.parentNode.querySelector('span')
                if (!child) {
                    input.insertAdjacentHTML('afterend', span)
                }
            }else {
                if (input.parentNode.querySelector('span')) {
                    let child = input.parentNode.querySelector('span')
                    input.parentNode.removeChild(child)
                }
            }
        }
    }
}