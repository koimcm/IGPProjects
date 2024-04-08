class ScoreUpdater extends Component{
    constructor(){
        super()
    }
    update() {
        Globals.score++
    }
    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.font = "30px Comic Sans MS"
        ctx.fillText(Globals.score, ctx.canvas.width / 2 - 15, 30)
    }
}

window.ScoreUpdater = ScoreUpdater
export default ScoreUpdater