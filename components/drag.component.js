import { dragCreate } from "../templates/drag.create"

export class DragComponent{
    constructor(elementId, placeholders) {
        this.$el = document.querySelector(elementId)
        this.$placeholders = document.querySelectorAll(placeholders)
        this.placeholdersEvents()
    }

    init() {
        this.$el.addEventListener('dragstart', this.dragstart.bind(this))
        this.$el.addEventListener('dragend', this.dragend.bind(this))
    }

    placeholdersEvents() {
        for (const placeholder of this.$placeholders) {
            placeholder.addEventListener('dragover',  this.dragover.bind(this))
            placeholder.addEventListener('dragenter', this.dragenter.bind(this))
            placeholder.addEventListener('dragleave', this.dragleave.bind(this))
            placeholder.addEventListener('drop', this.dragdrop.bind(this))
        }
    }

    dragstart(event) {
        if (event.target.nodeName === 'DIV') {
            event.target.classList.add('hold')
            setTimeout(() => event.target.classList.add('hide'), 0)
        }
    }

    dragend(event) {
        event.target.className = 'place-down'
    }

    dragover(event) {
        event.preventDefault()

        event.target.classList.remove('hovered')

    }
    
    dragenter(event) {
        if (event.target.nodeName === 'H1') {
            event.target.offsetParent.classList.add('hovered')
        }
    }
    
    dragleave(event) {
        if(event.target.nodeName === 'H1') {
            event.target.offsetParent.classList.remove('hovered')
        }
        
    }
    
    dragdrop(event) {
        if (event.target.nodeName === 'H1') {
            let HTML = dragCreate(event.target.offsetParent, event.target)
            this.$el.innerHTML = ''
            event.target.offsetParent.classList.remove('hovered')
            this.$el.insertAdjacentHTML('afterbegin', HTML)
            event.target.offsetParent.append(this.$el)
        }
    }
}