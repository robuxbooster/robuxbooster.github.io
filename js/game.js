//vars
const game = document.querySelector('.game-container') 
const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");
c.font = "59px serif";
canvas.height = 500;
let gameFrame = 0;
let score = 0;
let gameOver = false;
//game
class Player {
    constructor() {
        this.w = 30; 
        this.h = 30; 
        this.x = canvas.width / 2 - this.h / 2; 
        this.y = canvas.height - this.h * 2 - 50; 
        this.keys = {left: false,right: false}
    } draw() {
        c.fillStyle = "white";
        c.fillRect(this.x,this.y,this.w,this.h);
    } update() {
        this.draw();
        if (this.keys.right) {
            this.x = Math.min(this.x+5,canvas.width-this.w);
        } else if (this.keys.left) {
            this.x = Math.max(this.x-5,0);
        } 
    }
}
class Block {
    constructor() {
        this.w = 28;
        this.h = 28;
        this.x = Math.random()*(canvas.width-this.w);
        this.y = -50;
    } draw() {
        c.fillStyle = "red";
        c.fillRect(this.x,this.y,this.w,this.h)
    } update() {
        this.draw();
        this.y += 5;
    }
}
const player = new Player();
const blocks = [];

function collision(p1,p2) {
    return (p1.x+p1.w > p2.x && p1.x < p2.x+p2.w &&
    p1.y+p1.h > p2.y && p1.y < p2.y+p2.h);
}

function handleBlocks() {
    if (gameFrame % 50 == 0) blocks.push(new Block());
    for (let i=0; i < blocks.length; i++) {
        blocks[i].update()
        if (collision(blocks[i],player)) {
            endGame()
        } else if (blocks[i].y > canvas.height) {
            blocks.splice(i,1)
            i--;
            score++;
        }
    }
}

function scoreDisplay() {
    c.font = '20px Fredoka';
    c.fillStyle = "white";
    c.fillText(`${score}`,10,20); 
}

function animate() {
    c.clearRect(0,0,canvas.width,canvas.height);
    player.update();
    handleBlocks();
    scoreDisplay();
    gameFrame++;
    if (!gameOver) requestAnimationFrame(animate);
}
animate();

function endGame() {
    gameOver = true
    c.fillStyle = "yellow";
    c.fillText(`Game Over.`,canvas.width/2-50,canvas.height/2);
    setTimeout(()=>{
        window.location.href = "index.html";
    },700);
}