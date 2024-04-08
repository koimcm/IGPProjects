class MapDraw extends Component{
    constructor(){
        super()
    }
    draw(ctx) {
        ctx.fillStyle = "lightgray"
        ctx.beginPath()
        ctx.rect(ctx.canvas.width / 2 - 800, ctx.canvas.height / 2 - 400, Globals.screenX, Globals.screenY)
        ctx.fill()

        for (let i = 0; i < Globals.mapping.length; i++) {
            for (let j = 0; j < Globals.mapping[i].length; j++) {
                if (Globals.mapping[i][j] >= 0) {
                    this.block(i * 80, j * 80, 81)
                }
            }
        }
    }
    block(a, b, l) {
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")
        ctx.fillStyle = "darkred"
        ctx.beginPath()
        ctx.rect(a + ctx.canvas.width / 2 - 800, b + ctx.canvas.height / 2 - 400, l, l)
        ctx.fill()
    }
}

window.MapDraw = MapDraw
export default MapDraw