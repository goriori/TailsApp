

const map = ((width = 500, height = 500) => {
    const layersName = ['firstLayer', 'secondLayer', 'camera']
    const scene = createScene(width, height)


    class Map {


        //Проверка входных параметров экземпляра
        #validParam(selectorId, width, height) {
            if (!selectorId || !width || !height) throw Error('Missing input parameters')
        }




        // Создание Канваса
        #createCanvas(containerId, selectorName) {
            const newCanvas = document.createElement('canvas')
            newCanvas.setAttribute('id', selectorName)
            newCanvas.style.width = '100%'
            newCanvas.style.border = '1px solid black'
            newCanvas.style.position = 'absolute'

            containerId.appendChild(newCanvas)
        }




        // Инициализация карты
        #initMap(selectorId, width, height) {

            //Проверяем входные параметры экземпляра класса Map
            this.#validParam(selectorId, width, height)


            //Ищем селектор
            const findSeletor = document.getElementById(selectorId)


            // Создание карты
            const createMap = document.createElement('div')
            createMap.setAttribute('class', 'map')
            createMap.setAttribute('id', 'map')
            createMap.style.maxWidth = String(width) + 'px'
            createMap.style.position = 'relative'

            // Добавление карты в селектор
            findSeletor.appendChild(createMap)


            // Создаем несколько слоев Canvas
            layersName.forEach(element => {
                this.#createCanvas(createMap, element)
            })
        }




        // Поулчаем слои канваса после их инициализации
        #initLayers() {
            const layers = []
            layersName.forEach(element => {
                layers.push(document.getElementById(element))
            })
            return layers
        }



        #version
        #layers
        constructor(selectorId, width, height) {
            this.#version = '0.2'
            this.#info()
            this.#initMap(selectorId, width, height)
            this.map = document.getElementById('map')
            this.width = width
            this.height = height
            this.#layers = this.#initLayers()
            this.fillLayer(scene.getWorld(), 'firstLayer')
            

        }


        #info() {
            return console.log(`Map v ${this.#version}`)
        }

        #getLayer(layerName = '') {
            const findLayer = this.#layers.find(i => i.getAttribute('id') == layerName)
            return findLayer
        }

        #fillTiel(layer, x, y, color = 'blue') {
            layer.fillStyle = color;
            layer.fillRect(x, y, 50, 50);

        }

        fillLayer(matrix, layerName) {

            console.log(matrix)
            const layer = this.#getLayer(layerName).getContext('2d')

            for (let h = 0; h < matrix.length; h++) {

                for (let w = 0; w < matrix[h].length; w++) {
                    const { x, y, color } = matrix[h][w]
                    this.#fillTiel(layer, x, y, color)
                }

            }
        }

        updateLayerCamera(settings) {
            const camera = document.querySelector('#camera')
            const { x, y, width, height, color } = settings
            console.log(width, height)
            camera.style.width = width + 'px'
            camera.style.height = height + 'px'
            camera.style.border = '1px solid black'
            
        }

    }
    return new Map('scene', width, height)
})()


