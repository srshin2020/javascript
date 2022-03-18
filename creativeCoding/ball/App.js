import { Ball } from "./Ball.js";
import { Bar } from "./Bar.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.ball = new Ball(50, 15);
        // this.bar = new Bar(0, 0, 300, 300);
        this.resize();
        requestAnimationFrame(this.animate.bind(this));
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.context.scale(2, 2);
        this.ball.resize(this.stageWidth, this.stageHeight);

    }
    animate(t) {
        this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.ball.draw(this.context);
        // this.bar.draw(this.context);

        window.requestAnimationFrame(this.animate.bind(this));

    }

}

window.onload = () => {
    new App();
}