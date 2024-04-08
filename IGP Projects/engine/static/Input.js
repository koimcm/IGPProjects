class Input {
    static keysDown = []
    static keysUpThisFrame = []
    static mousePosition = { x: 0, y: 0 }
    static mouseUpThisFrame = false;

    static mousemove(e) {
        Input.mousePosition.x = e.clientX;
        Input.mousePosition.y = e.clientY;
    }

    static mouseup(e){
        Input.mouseUpThisFrame = true;
    }

    static keyup(e) {
        let index = Input.keysDown.indexOf(e.code)
        Input.keysDown.splice(index, 1)
        Input.keysUpThisFrame.push(e.code);
    }

    static keydown(e) {
        if (!Input.keysDown.includes(e.code))
            Input.keysDown.push(e.code)
    }

    static update(){
        Input.mouseUpThisFrame = false
        Input.keysUpThisFrame = []
    }
}

window.Input = Input