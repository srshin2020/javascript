export class Point {
    constructor(x, y) {
        console.log('Point.constructor()');

        this.x = x;
        this.y = y;
        console.log('this.x, this.y : ', this.x, this.y);

        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100 + 150;
        console.log('this.max: ', this.max)
    }
    update() {
        // console.log('Point.update()');
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
        // console.log('y', this.y)
    }
}