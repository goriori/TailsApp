
const createScene = (width, height) => {
    let self;
    class Cell {
        constructor(type = 'cell', x = 1, y = 1, color = "#AE8850", mapColor = "#AE8850") {
            this.type = type
            this.tileSet = JSON.parse(JSON.stringify([5, 10]))
            this.x = x
            this.y = y
            this.color = color
            this.mapColor = mapColor
            this.build = false
        }
    }

    class Scene {
        #version
        #module
        #matrixScene
        #settings
        constructor(width, height) {


            this.#version = '0.5'
            this.#module = 'SceneModule'
            this.#info()


            this.#matrixScene = null
            this.#settings = {
                width: width,
                height: height,
            }


            this.setDimensions(this.#settings.width, this.#settings.height)
            self = this


        }



        // Возвращает информацию о модуле
        #info() {
            return console.log(`Scene v ${this.#version}`)
        }



        // Возвращает параметры сцены(Ширина и Высота)
        getDimension() {
            return this.#settings
        }



        // Устанавливает Ширину и Высоту сцены
        // Создает на основе Ширины и Высоты - матрицу
        // Устанавливает в приватный переменную параметры сцены
        setDimensions(width, height) {
            this.#settings.width = width
            this.#settings.height = height
            const sceneMatrix = this.#createMatrix(width, height)
            this.#matrixScene = sceneMatrix
            return
        }




        // Создает матрицу.
        // Содержит два аргумента - Ширина и Высота, на основе которых создается матрица
        // Возвращает двумерный массив
        #createMatrix(width = 5, height = 5) {
            const matix = Array()
            for (let h = 0; h < height; h++) {
                matix.push([])
                for (let w = 0; w < width; w++) {
                    matix[h].push(new Cell(0, w, h))
                }
            }
            return matix

        }



        // Возвращает матрицу
        getWorld() {
            return this.#matrixScene
        }



        // Поулчаем выделенный квадрат 5 на 5 из матрицы , начало считывания - координаты x и y
        getPicture(x = 3, y = 5) {
            const getMatrix = this.getWorld()
            const newPicture = getMatrix.map((value, index) => {
                if (index >= y) return value.slice(x, x + 5)
                else return -1
            }).slice(y, y + 5)
            return newPicture
        }




        #in_diapason(coord, diapason) {

        }



        // Получаем ячейку по осям x и y
        getCell(coord = { x: 2, y: 3, }) {
            const getMatrix = this.getWorld()
            const cell = getMatrix.find((value, index) => index === coord.y)[coord.x]
            return new Object(cell)
        }




        getBuildId(coord) {

        }



        // Возвращает отформатированную дату под формат dd.mm.yyyy
        dateFormat(date) {
            const dateFormat = new Date(date)
            let day = dateFormat.getDate()
            let month = dateFormat.getMonth() + 1
            const year = dateFormat.getFullYear()
            if (day < 10) day = `0` + day
            if (month < 10) month = `0` + month
            return `${day}.${month}.${year}`
        }




        save() {

        }




        prepareFileRow(row) {

        }




        prepareFileCell(curCell, dateSet, end) {

        }




        loadMap(content) {

        }




        load(content) {

        }




        loadBlock(line) {

        }




        packData(field) {

        }




        unPackData(landsType, line, x, y) {

        }
    }
    return new Scene(width, height)
}

