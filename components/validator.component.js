import { Component } from "../core/component"
import { renderInfo } from "../templates/info.create"

export class Validator extends Component{
    constructor(item, btn, dataName, spawn) {
        super(btn)
        this.$spawn = document.querySelector(spawn)
        this.$el = document.querySelector(item)
        this.$dataName = dataName
    }

    init() {
        this.$btn.addEventListener('click', this.checkItem.bind(this))
    }

    toMass(mass, element){
        element.forEach(item => {
            mass.push(item)
        })
        return mass
    }

    checkItem(event) {
        event.preventDefault()
        
        let allInputs = this.$el.querySelectorAll('input')
        let allTextAreas = this.$el.querySelectorAll('textarea')
        let mass = []

        this.toMass(mass, allInputs)
        this.toMass(mass, allTextAreas)
        
        mass.forEach(item => {
            this.validation(item, this.$dataName)
        })
        
        if (this.$el.querySelector('form').querySelectorAll('span').length == 0) {
            let newMass = []
            mass.forEach(input => {
                newMass.push({[input.dataset[this.$dataName]]: input.value})
            })

            let HTMLInfo = renderInfo(newMass, this.$dataName)

            let parentBLock = this.$spawn.parentNode
            let allElements = this.$spawn.querySelectorAll('div')
            if (allElements.length === 0) {
                this.$spawn.insertAdjacentHTML('beforeend', HTMLInfo)
    
            }else {
                let widthSpawn = this.$spawn.getBoundingClientRect().width
                let sum = 0

                allElements.forEach(element => {
                    sum += element.clientWidth
                })

                if (((widthSpawn - (allElements.length * sum)) > 50)) {
                    this.$spawn.insertAdjacentHTML('beforeend', HTMLInfo)
                }else {
                    let dataName = this.$spawn.dataset[this.$dataName]
                    let HTMLRow = renderInfo(false, dataName)
                    parentBLock.insertAdjacentHTML('beforeend', HTMLRow)
                    this.$spawn = parentBLock.lastElementChild
                }
            }         
        }
    }

}
