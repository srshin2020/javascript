class Panel {
    constructor() {
        this.scale = 0;
        this.angle = 0;
        this.width = 200;
        this.height = 200;
        this.x = -this.width / 2;
        this.y = -this.height / 2;
    }
    draw(textString) {
        context.resetTransform();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(this.scale, this.scale);
        context.rotate(this.angle);
        context.fillStyle = 'rgba(0, 0, 255, 0.4)';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = '#fff';
        context.fillText(textString, this.x + this.width / 2, this.y + this.height / 2)
        context.resetTransform();
    }
}
