import { WaveGroup } from "./WaveGroup.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        let colors = ['rgba(200,10,10, 0.3)', 'rgba(10,100,20, 0.3)', 'rgba(10,10,200, 0.3)']
        this.waveGroup = new WaveGroup(3, colors);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }
    resize() {
        console.log('app.resize()');
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.context.scale(2, 2);
        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }
    animate() {
        // console.log('app.animate()');
        this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.context);
        requestAnimationFrame(this.animate.bind(this));
    }
}
window.onload = () => {
    const app = new App();
    app.animate();
}