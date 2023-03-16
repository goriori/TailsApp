const scene = createScene(500, 500);

new ButtonLogic(scene);
new ButtonUi();

const camera = createCamera({ color: 'green', width: window.innerWidth });
const testElement = document.querySelector('#map');

let coord = {
    x: testElement.getBoundingClientRect().x,
    y: testElement.getBoundingClientRect().y,
};

testElement.addEventListener('wheel', (event) => {
    const data = camera.onWheel(event, coord, scene.getDimension());
    map.updateLayerCamera(data)

});

testElement.addEventListener('click', (event) => {
    console.log(event)
    const { layerX, layerY } = event
    camera.move({ x: layerX, y: layerY })
    const data = camera.getState()
   console.log(data)
    map.updateLayerCamera(data)
})
