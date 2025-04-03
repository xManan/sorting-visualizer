const WIDTH = 800
const HEIGHT = 600
const BG_COLOR = 255
const BAR_COLOR = 0
const BAR_STROKE = 255

const APP_STATE = {
    PAUSED: 'paused',
    PLAYING: 'playing',
}

let state = APP_STATE.PAUSED

function toggle() {
    state = state === APP_STATE.PAUSED ? APP_STATE.PLAYING : APP_STATE.PAUSED
    document.getElementById('play').innerText = state === APP_STATE.PLAYING ? 'Pause' : 'Play'
}

let bar = {
    heights: [],
    width: 0,
}
bar.heights = randomizeBars(10, 100, HEIGHT)
bar.width = WIDTH / bar.heights.length

let algo = getAlgo(document.getElementById('algo').value)
algo.reset(bar.heights)
document.getElementById('algo').addEventListener('change', (e) => {
    algo = getAlgo(e.target.value)
    bar.heights = randomizeBars(bar.heights.length, 100, HEIGHT)
    algo.reset(bar.heights)
})

function getAlgo(name) {
    switch (name) {
        case 'bubble':
            return new BubbleSort(bar.heights)
        case 'selection':
            return new SelectionSort(bar.heights)
        case 'insertion':
            return new InsertionSort(bar.heights)
        case 'merge':
            return new MergeSort(bar.heights)
        // case 'quick':
        //     return new QuickSort(bar.heights)
        default:
            return new BubbleSort(bar.heights)
    }
}

document.getElementById('play').addEventListener('click', toggle)
const sizeEl = document.getElementById('size')
const sizeLabel = document.getElementById('sizeLabel')
document.getElementById('random').addEventListener('click', () => {
    bar.heights = randomizeBars(sizeEl.value, 100, HEIGHT)
    bar.width = WIDTH / bar.heights.length
    algo.reset(bar.heights)
})
sizeEl.addEventListener('input', (e) => {
    bar.heights = randomizeBars(parseInt(e.target.value), 100, HEIGHT)
    bar.width = WIDTH / bar.heights.length
    sizeLabel.innerText = bar.heights.length
    algo.reset(bar.heights)
})
sizeEl.value = bar.heights.length
sizeLabel.innerText = bar.heights.length
let speed = document.getElementById('speed').value
document.getElementById('speed').addEventListener('input', (e) => {
    speed = e.target.value
})

function randomizeBars(n, minH, maxH) {
    let bars = []
    for (let i = 0; i < n; i++) {
        bars.push(parseInt(Math.random() * (maxH - minH) + minH))
    }
    return bars
}

function setup() {
    createCanvas(WIDTH, HEIGHT).style('border', '1px solid black')
}

function draw() {
    background(BG_COLOR)
    drawBars()
    if (state === APP_STATE.PLAYING) {
        for (let i = 0; i < speed; i++) {
            if (algo.sort()) {
                state = APP_STATE.PAUSED
                document.getElementById('play').innerText = 'Play'
            }
        }
    }
}

function drawBars() {
    for (let i = 0; i < bar.heights.length; i++) {
        fill(BAR_COLOR)
        stroke(BAR_STROKE)
        rect(i * bar.width, HEIGHT - bar.heights[i], bar.width, bar.heights[i])
    }
}
