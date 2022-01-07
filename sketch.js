const r = 15;
let angle = 0;
let alternate = false;
class Line {
    alternateAngle(currentState){
        if(currentState){
            currentState = false;
        }
        else{
            currentState = true;
        }
        return currentState;
    }
    calculate(currentR, currentA) {
        this.r = currentR;
        if(alternate){
            angle -= 0.01;
        }
        else{
            angle += 0.01;
        }
        this.x = r * Math.cos(angle);
        this.y = r * Math.sin(angle);
        this.x2 = r * this.x + this.x;
        this.y2 = r * this.y + this.y;
        line(this.x, this.y, this.x2, this.y2);
        ellipse(this.x2, this.y2, 20);
    }
}
class Bob{
    constructor(){
        this.x = x;
        this.y = y;
    }
    draw(x, y){
        ellipse(x, y, 20);
    }
}
const line1 = new Line(r, angle);
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    translate(width / 2, height / 2);
    background(51);
    strokeWeight(5);
    line1.calculate(r, angle);
    if(parseInt(line1.y2) == 0 || parseInt(line1.y2) == -7){
        alternate = line1.alternateAngle(alternate)
    }
}

