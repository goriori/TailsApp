
class ButtonUi {
    constructor() {
        this.button_map_10x10 = document.getElementById('10x10')
        this.button_map_12x12 = document.getElementById('12x12')
        this.button_map_15x15 = document.getElementById('15x15')




        this.button_map_10x10.onclick = () => {
            event.preventDefault()
            this.#noActive(this.button_map_12x12)
            this.#noActive(this.button_map_15x15)
            return this.#active(this.button_map_10x10)
        }
        this.button_map_12x12.onclick = () => {
            event.preventDefault()
            this.#noActive(this.button_map_10x10)
            this.#noActive(this.button_map_15x15)
            return this.#active(this.button_map_12x12)
        }
        this.button_map_15x15.onclick = () => {

            event.preventDefault()
            this.#noActive(this.button_map_10x10)
            this.#noActive(this.button_map_12x12)
            return this.#active(this.button_map_15x15)
        }




    }




    #active(el) {
        el.setAttribute('class', 'active')
    }




    #noActive(el) {
        el.removeAttribute('class', 'active')
        el.setAttribute('class', 'pull')
    }
    
}

