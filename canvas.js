const
    HEIGHT = 1000;
    WIDTH = 1000;
/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById("myCanvas");
let pen = canvas.getContext("2d");
pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;

canvas.style.border = "5px solid black";
function slime(){
    pen.globalAlpha = 1;
    //Outerbody
    pen.beginPath();
    pen.moveTo(180,540)
    pen.bezierCurveTo(150, 100, 800, 30, 820, 540)
    pen.moveTo(180,540)
    pen.bezierCurveTo(200, 800, 800, 820, 820, 540)
    pen.fillStyle = "#e7f5fe"
    pen.lineWidth = 6
    pen.fill()
    pen.stroke();
    pen.closePath();

    //eyeLeft
    pen.beginPath();
    pen.moveTo(250, 400);
    pen.quadraticCurveTo(420, 420, 500, 420)
    pen.lineWidth = 3;  
    pen.stroke();
    pen.closePath();

    //eyeRight
    pen.beginPath();
    pen.moveTo(550, 420);
    pen.quadraticCurveTo(600, 420, 770, 400)
    pen.lineWidth = 3;
    pen.stroke();
    pen.closePath();
}

function clear(){
    pen.clearRect(0, 0, WIDTH, HEIGHT); 
}

function slimeShy(transparency){
    pen.globalAlpha = transparency;

    pen.beginPath();
    pen.arc(250, 480, 40, 0, 2 * Math.PI)
    pen.closePath();
    pen.fillStyle = "#dfabc3";
    pen.fill();
    pen.stroke();

    pen.beginPath();
    pen.arc(770, 480, 40, 0, 2 * Math.PI)
    pen.closePath();
    pen.fillStyle = "#dfabc3";
    pen.fill();
    pen.stroke();

}
slime();

function loop(){
    let FPS = 60;
    let timeLoop = 1000/FPS;
    let transparency = 0;
    let counter = 0;
    
    setInterval(() => {
        slime();
        if(transparency < 1  && counter == transparency){
            transparency += 0.01;
            counter += 0.01;
            console.log("up");
        }else if(transparency > 0){
            transparency -= 0.01;
            console.log("down");
            if(transparency < 0){
                counter = transparency;
            }
        }
        clear();
        slime()
        slimeShy(transparency);
    }, timeLoop);
}

loop();

