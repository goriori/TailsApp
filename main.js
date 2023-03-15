const scene = createScene(500, 500);

new ButtonLogic(scene);
new ButtonUi();

const camera = createCamera({ color: 'green', width: window.innerWidth });
const testElement = document.querySelector('#camera');

let coord = {
    x: testElement.getBoundingClientRect().x,
    y: testElement.getBoundingClientRect().y,
};

testElement.addEventListener('wheel', (event) => {
    const data = camera.onWheel(event, coord, scene.getDimension());
    console.log(data);
});
