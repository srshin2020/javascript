import { Point } from "./Point.js";

export class Wave {
    constructor(index, count, color) {
        this.index = index;
        this.totalCount = count;
        this.color = color;
        this.points = [];
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
        for (let i = 0; i < this.totalCount; i++) {
            this.points.push(new Point(this.index + i, this.stageWidth / (this.totalCount - 1) * i, this.centerY));
        }
    }

    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        let pre = {
            x: this.points[0].x,
            y: this.points[0].y
        };
        context.moveTo(pre.x, pre.y);
        for (let i = 1; i < this.points.length; i++) {
            let point = this.points[i];
            if (i < this.points.length - 1)
                point.update();
            let current = {
                x: (pre.x + point.x) / 2,
                y: (pre.y + point.y) / 2
            };
            // context.arc(point.x, point.y, 30, 0, Math.PI * 2);
            // context.lineTo(current.x, current.y);
            context.quadraticCurveTo(pre.x, pre.y, current.x, current.y);
            pre.x = point.x;
            pre.y = point.y;
        }
        context.lineTo(pre.x, pre.y);
        context.lineTo(this.stageWidth, this.stageHeight);
        context.lineTo(this.points[0].x, this.stageHeight);
        context.closePath();
        context.fill();
    }
}