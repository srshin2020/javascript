class Box {
    static index = 0;
    constructor() {
        Box.index++;
        this.id = Box.index;
        this.speed = Math.random() * 3 + 1;
        this.width = Math.random() * (canvas.width / 5) + 60;
        this.height = Math.random() * canvas.height / 5 + 50;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
    }
    draw() {
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = '#fff';
        context.fillText(this.id, this.x + this.width / 2, this.y + this.height / 2)
    }
}
