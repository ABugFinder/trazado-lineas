
const boardHeight = 800;
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

    ciircle(240,550,100, "MP Circle");
    eellipse(580,550,100,45, "MP Ellipse");

    noLoop();
}

function pintarCirculo( nombre, accion, pos){
    const x = ((width / 4)+25) * (pos)-50;
    const y = 200;
    push();

    strokeWeight(5);
    stroke(87,35,100);

    //fill(15,75,115); //Color azul
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

function ciircle(cX,cY,r,nombre) {
	let x = 0, y = r , p;
	point(x + cX, y + cY)
    p = (Number.isInteger(p))? p = 1 - r : p = (5/4) - r;
    while (x <= y) {
        if (p < 0) {
        x = x + 1
        p = p + (2 * x) + 1
        } else {
        x = x + 1
        y = y - 1
        p = p + (2 * x) - (2 * y) + 1
        }
        point(x + cX, y + cY)
        point(-x + cX, y + cY)
        point(x + cX, -y + cY)
        point(-x + cX, -y + cY)
        point(y + cX, x + cY)
        point(-y + cX, x + cY)
        point(y + cX, -x + cY)
        point(-y + cX, -x + cY)
    }
    textSize(20);
    text(nombre, cX-40, cY+130);
  }

  function eellipse(cX, cY, rX, rY, nombre) {
    let x1 = 0, y1 = rY, x2 = rX, y2 = 0;
    while (Math.pow(rX,2)*y1 >=  Math.pow(rY,2)*x1) {
        point(x1 + cX, y1 + cY);
        point(-x1 + cX, y1 + cY);
        point(x1 + cX, -y1 + cY);
        point(-x1 + cX, -y1 + cY);
        x1 = x1 + 1;
        y1 = (1/rX) * Math.sqrt(Math.pow(rX,2)*Math.pow(rY,2) - Math.pow(rY,2)*Math.pow(x1,2));	
    }
    while (Math.pow(rX,2)*y2 <= Math.pow(rY,2)*x2) {
        point(x2 + cX, y2 + cY);
        point(-x2 + cX, y2 + cY);
        point(x2 + cX, -y2 + cY);
        point(-x2 + cX, -y2 + cY);
        x2 = (1/rY) * Math.sqrt(Math.pow(rX,2)*Math.pow(rY,2) -Math.pow(rX,2)*Math.pow(y2,2));
        y2 = y2 + 1;		
    }
    textSize(20);
    text(nombre, cX-40, cY+130);
  }
