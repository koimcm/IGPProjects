class Circle extends Component{
    constructor(radius = 30, fill = "green", stroke = "darkGreen"){
        super()
        this.radius = radius
        this.fill = fill
        this.stroke = stroke
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.fill
        ctx.strokeStyle = this.stroke
        ctx.lineWidth = 5
        ctx.arc(this.parent.transform.x,this.parent.transform.y, this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.stroke()
    }
    asGeometry(){
        return new Circle2(this.transform.x, this.transform.y, this.transform.scaleX)
    }
}

window.Circle = Circle