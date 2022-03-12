import { Wave } from "./Wave.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.wave = new Wave();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        requestAnimationFrame(this.animate.bind(this));
    }
    resize() {
        console.log('app.resize()');
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.context.scale(2, 2);

        this.wave.resize(this.stageWidth, this.stageHeight);
    }
    animate() {
        // console.log('app.animate()');
        this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.wave.draw(this.context);
        requestAnimationFrame(this.animate.bind(this));
    }
}
window.onload = () => {
    new App();
}