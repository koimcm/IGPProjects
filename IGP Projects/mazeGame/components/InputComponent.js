class InputComponent extends Component{
    constructor(){
        super()
    }
    update(){
        let speed = 500
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.x -= speed / Time.fps
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.x += speed / Time.fps
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.y -= speed / Time.fps
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.y += speed / Time.fps
    }
}

window.InputComponent = InputComponent
export default InputComponent