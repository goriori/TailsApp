const createCamera = (options = {}) => {
    class Camera {
        constructor(options) {
            this.name = 'Модуль Камеры';
            this.version = '1.2';
            this.color = options['color'] ? options['color'] : 'blue';
            this.setDimensions(options);
            this.scale = 3;
            this.setScale();
            this.controlKey = {
                left: false,
                right: false,
                up: false,
                down: false,
            };
        }

        // информация о модуле и версии
        info() {
            return this.name + ' v' + this.version;
        }

        // изменение масштаба при прокрутке колеса
        onWheel(e, coord, dimension) {
            e = e || window.event;
            // wheelDelta не даёт возможность узнать количество пикселей
            let delta = e.deltaY || e.detail || e.wheelDelta;
            this.scale += delta > 0 ? 1 : -1;
            this.scale = this.scale <= 0 ? 1 : this.scale;
            this.scale = this.scale >= 7 ? 6 : this.scale;
            this.setScale();
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            this.move(coord, dimension);

            return this.getState();
        }

        // установить значения ширины и высоты экрана в количестве ячеек от масштаба
        setScale() {
            switch (this.scale) {
                case 1:
                    this.cellWidthCount = 10;
                    this.cellHeightCount = 10;
                    break;
                case 2:
                    this.cellWidthCount = 20;
                    this.cellHeightCount = 20;
                    break;
                case 3:
                    this.cellWidthCount = 30;
                    this.cellHeightCount = 30;
                    break;
                case 4:
                    this.cellWidthCount = 40;
                    this.cellHeightCount = 40;
                    break;
                case 5:
                    this.cellWidthCount = 50;
                    this.cellHeightCount = 50;
                    break;
                case 6:
                    this.cellWidthCount = 60;
                    this.cellHeightCount = 60;
                    break;
            }
        }

        // определяет по ширине экрана - какую форму принять горизонтальную или вертикальную (десктоп и мобилка) и выставляет начальные координаты экрана
        setDimensions(options) {
            if (options.width > 768) {
                this.orientation = 'horizontal';
            } else {
                this.orientation = 'vertical';
            }
            this.cameraX = 0;
            this.cameraY = 0;
        }

        // получить параметры камеры x, y, width, height
        getState() {
            return {
                x: this.cameraX,
                y: this.cameraY,
                width: this.cellWidthCount,
                height: this.cellHeightCount,
                color: this.color,
            };
        }

        // передвинуть камеру с учётом границ мира с центром по переданным координатам.
        move(coord, bounder) {
            this.cameraX = coord.x;
            this.cameraY = coord.y;

            this.cameraX =
                bounder.width - this.cellWidthCount > this.cameraX
                    ? this.cameraX
                    : bounder.width - this.cellWidthCount;

            this.cameraY =
                bounder.height - this.cellHeightCount > this.cameraY
                    ? this.cameraY
                    : bounder.height - this.cellHeightCount;
        }
    }

    return new Camera(options);
};
