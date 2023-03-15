
class ButtonLogic {
    constructor(map) {
        this.map = map
        this.button_map_10x10 = document.getElementById('10x10')
        this.button_map_12x12 = document.getElementById('12x12')
        this.button_map_15x15 = document.getElementById('15x15')

        this.button_map_10x10.onclick = () => {
            event.preventDefault()
            console.log('10x10')
            map.setDimensions(10, 10)
            const scene = map.getWorld()
            console.log('Cоздана сцена 10 на 10', scene)
        }
        this.button_map_12x12.onclick = () => {
            event.preventDefault()
            console.log('12x12')
            map.setDimensions(12, 12)
            const scene = map.getWorld()
            console.log('Cоздана сцена 12 на 12', scene)
        }

        this.button_map_15x15.onclick = () => {
            event.preventDefault()
            console.log('15x15')
            map.setDimensions(15, 15)
            const scene = map.getWorld()
            console.log('Cоздана сцена 15 на 15', scene)
        }
    }


}