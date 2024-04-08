class Point extends Component{
    constructor(fill = "black"){
        super()
        this.fill = fill
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.fill
        ctx.arc(this.transform.x,this.transform.y, 10, 0, Math.PI*2)
        ctx.fill

    }
    asGeometry(){
        return new Vector2(this.transform.x, this.transform.y)
    }
}

window.Point = Point