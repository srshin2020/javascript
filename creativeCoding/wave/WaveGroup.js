import { Wave } from "./Wave.js";

export class WaveGroup {
    constructor(totalCount, colors) {
        this.waves = []
        this.totalPoints = 6;
        for (let i = 0; i < totalCount; i++) {
            this.waves.push(new Wave(i, this.totalPoints, colors[i]));
        }

    }
    resize(stageWidth, stageHeight) {
        this.waves.forEach(element => {
            element.resize(stageWidth, stageHeight);
        });
    }
    draw(context) {
        this.waves.forEach(element => {
            element.draw(context)
        });;

    }
}