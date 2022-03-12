import { Point } from "./Point.js";

export class Wave {
    constructor() {
    }
    resize(stageWidth, stageHeight) {
        console.log('Wave.resize()');

        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.init();
    }
    init() {
        console.log('Wave.init()');

        this.point = new Point(this.centerX, this.centerY);
    }
    draw(context) {
        // console.log('Wave.draw()');

        context.beginPath();
        context.fillStyle = '#ff0000';
        this.point.update();
        context.arc(this.point.x, this.point.y, 30, 0, Math.PI * 2);
        context.fill();

    }
}