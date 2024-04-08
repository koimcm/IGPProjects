import "/IGP Projects/engine/components/Transform.js"


class GameObject {

    components = []

    constructor(name){
        this.name = name
        this.addComponent(new Transform())
        this.markForDestroy = false
    }

    get transform(){
        return this.components[0]
    }

    addComponent(comp){
        this.components.push(comp)
        comp.parent = this
    }

    start(ctx){
        for (let comp of this.components){
            if (comp.start){
                comp.start(ctx)
            }
        }
    }

    draw(ctx){
        for (let comp of this.components){
            if (comp.draw){
                comp.draw(ctx)
            }
        }
    }

    update(ctx){
        for (let comp of this.components){
            if (comp.update){
                comp.update(ctx)
            }
        }
    }

    getComponent(name){
        return this.components.find(c=>c.constructor.name == name)
    }

    static filter(gObjName){
        return Engine.currentScene.gameObjects.filter(go => go.name = gObjName)
    }

    static instantiate(gObj, x = 0, y = 0, scaleX = 1, scaleY = 1){
        Engine.currentScene.gameObjects.push(gObj)
        gObj.transform.x = x
        gObj.transform.y = y
        gObj.transform.scaleX = scaleX
        gObj.transform.scaleY = scaleY
    }

    static destroy(gObj){
        gObj.markForDestroy = true
    }
}

window.GameObject = GameObject