import "/IGP Projects/engine/classes/Scene.js"

class LoseScene extends Scene {
    constructor() {
        super();
        this.timer = 0
    }
    update() {
        Globals.score = 0
        Globals.mapping = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        Globals.mapSetup = 0;
        Globals.validPath = 0;
        this.timer += Time.ms;
        if (this.timer > 1000) {
            Engine.currentScene = new MazeScene();
        }
    }
    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.fillStyle = "red"
        ctx.font = "30px Comic Sans MS"
        ctx.fillText("You Lose!", 400, 240)
        ctx.fillText("Restarting soon..", 400, 300)
    }
}

window.LoseScene = LoseScene
export default LoseScene