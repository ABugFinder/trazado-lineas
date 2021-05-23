
const boardHeight = 600;
const boardWidth = 800;

const r = 100;
const algoritmos = {
  pp: "PuntoPendiente",
  dda: "DDA",
  bresenham: "Bresenham",
};

function setup(){
    let myCanvas = createCanvas(boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(255);
    background(220,15,40,100);

    pintarCirculo(algoritmos.pp, algoritmos.pp, 1);
    pintarCirculo(algoritmos.dda, algoritmos.dda, 2);
    pintarCirculo(algoritmos.bresenham, algoritmos.bresenham, 3);
    noLoop();
}

function pintarCirculo( nombre, accion, pos){
    const x = ((width / 4)+25) * (pos)-50;
    const y = 200;
    push();

    strokeWeight(5);
    stroke(87,35,100);

    fill(15,75,115);
    circle(x, y, r * 2);

    pop();

    textSize(20);
    text(nombre, x-r/2, y+r*2);

    this[accion](x, y-r, x, y+r);
    this[accion](x-r, y, x+r, y);

    var r1 = radians(45);
    var r2 = radians(225);
    
    this[accion](
        Math.floor(x+r*cos(r1)), Math.floor(y+r*sin(r1)),
        Math.floor(x+r*cos(r2)), Math.floor(y+r*sin(r2))
    );
    
    r1 = radians(135);
    r2 = radians(315);

    this[accion](
        Math.floor(x+r*cos(r1)), Math.floor(y+r*sin(r1)),
        Math.floor(x+r*cos(r2)), Math.floor(y+r*sin(r2))
    );
};
