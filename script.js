let arr = []
randomArray();

function randomArray() {
    arr = [];
    size = document.getElementById('arraySize').value;
    if (!size) {
        size = 10;
    } else {
        size = parseInt(size);
    }
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 400) + 100);
    }
    document.getElementById('arraySizeLabel').innerText = size;
}

document.getElementById('arraySize').addEventListener('input', randomArray);

document.getElementById('random').addEventListener('click', randomArray);

function setup() {
    createCanvas(800, 600).style('border', '2px solid black');
}
const gap = 5;
function draw() {
    background(255);
    stroke(255);
    fill(0);
    barSize = 800 / arr.length;
    arr.forEach((el, i) => {
        rect(i * (barSize), 600, barSize, -el);
    });
}
