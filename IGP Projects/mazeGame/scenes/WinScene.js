import "/IGP Projects/engine/classes/Scene.js"

class WinScene extends Scene {
    constructor() {
        super();
    }
    update() {

    }
    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.fillStyle = "white"
        ctx.font = "30px Comic Sans MS"
        ctx.fillText("You Win!", 400, 240)
        ctx.fillText("Beat in " + Globals.score + " frames (seconds)", 400, 300)
        ctx.fillText("Thanks for playing!", 400, 360)
    }
}

window.WinScene = WinScene
export default WinScene