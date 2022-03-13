export class Ball {
    constructor(radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

    }
    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.x = Math.random() * (this.stageWidth - this.radius * 2) + this.radius;
        this.y = Math.random() * (this.stageHeight - this.radius * 2) + this.radius;
    }

    draw(context) {
        context.fillStyle = '#ff00ff';
        context.beginPath();
        this.x += this.vx;
        this.y += this.vy;
        if (this.x + this.radius > this.stageWidth || this.x < this.radius) this.vx *= -1;
        if (this.y + this.radius > this.stageHeight || this.y < this.radius) this.vy *= -1;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

}