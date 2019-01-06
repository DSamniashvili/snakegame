class Snake extends Canvas {
    constructor() {
        super();
        this.body = [];
        this.snakeL = 4;
    }
    draw(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
        this.ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
        this.ctx.closePath();
    }
    getSnakeLength() {
        if (localStorage.getItem('snake-length') !== null) {
            snakeClass.snakeL = parseInt(localStorage.getItem('snake-length'));
        }
        for (let i = snakeClass.snakeL; i > 0; i--) {
            snakeClass.body.push({
                x: 0,
                y: 2
            });
        }
        console.log(snakeClass.snakeL);
    }
    checkCollision(x, y, array) {
        for (let i = 0; i < array.length; i++) {
            if (x == array[i].x && y == array[i].y) {
                return true;
            }
        }
        return false;
    }

}



