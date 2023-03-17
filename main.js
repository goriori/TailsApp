const scene = createScene(500, 500);

new ButtonLogic(scene);
new ButtonUi();

const camera = createCamera({ color: 'green', width: window.innerWidth });
const testElement = document.querySelector('#map');

map.updateLayerCamera(camera.getState());

testElement.addEventListener('wheel', (event) => {
    console.log(event);
    const { layerX, layerY } = event;
    const data = camera.onWheel(
        event,
        { x: layerX, y: layerY },
        scene.getDimension()
    );
    map.updateLayerCamera(data);
});

testElement.addEventListener('click', (event) => {
    console.log(event);
    const { layerX, layerY } = event;
    camera.move({ x: layerX, y: layerY }, scene.getDimension());
    const data = camera.getState();
    console.log(data);
    map.updateLayerCamera(data);
});
