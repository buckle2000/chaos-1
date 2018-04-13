let points
let deviation = 0.2
let groupSize = 100

function polar(r, a) {
  return [r * cos(a), r * sin(a)]
}

function reset() {
  let angle = random(0, 2 * PI)
  points = Array.from({
    length: groupSize
  }).map(() => polar(random(30, 80), angle += random(PI * (1), PI * (1 + deviation))))
  draw()
}

function setup() {
  createCanvas(200, 200)

  // reset
  createButton('生成')
    .mousePressed(reset)
  // deviation
  createSlider(0, 3, deviation, 'any')
    .input(function () {
      deviation = this.value()
      reset()
    })
  // group size
  createSlider(0, 1000, groupSize)
    .input(function () {
      groupSize = this.value()
      reset()
    })

  reset()
}

function drawCycle(points) {
  beginShape()
  points.forEach(p => curveVertex(p[0], p[1]))
  points.slice(0, 3).forEach(p => curveVertex(p[0], p[1]))
  endShape()
}

function draw() {
  clear()
  push()
  translate(100, 100)
  noFill()
  drawCycle(points)
  pop()
}

