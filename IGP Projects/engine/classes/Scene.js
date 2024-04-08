
class Scene {
    
    gameObjects = []
    hasStarted = false
    
    constructor(bgColor) {
        this.bgColor = bgColor
        this.hasStarted = false
    }
    
    _start(ctx){
        if(!this.hasStarted){
            this.hasStarted = true
            if (this.start)
                this.start(ctx)
            for (const gObj of this.gameObjects){
                if (gObj.start)
                gObj.start(ctx)
            }
        }
    }

    draw(ctx){
        for(const gObj of this.gameObjects){
            gObj.draw(ctx)
        }
    }
    update(){
        for(const gObj of this.gameObjects){
            if (gObj.update){
                gObj.update()
            }
        }
    }
}

window.Scene = Scene