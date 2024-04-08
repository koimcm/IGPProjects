import "/IGP Projects/engine/classes/Component.js"
import "/IGP Projects/engine/classes/GameObject.js"
import "/IGP Projects/engine/classes/Scene.js"

import "/IGP Projects/engine/components/Circle.js"
import "/IGP Projects/engine/components/Line.js"
import "/IGP Projects/engine/components/Point.js"
import "/IGP Projects/engine/components/Rectangle.js"
import "/IGP Projects/engine/components/Text.js"
import "/IGP Projects/engine/components/Transform.js"

import "/IGP Projects/engine/geometry/Vector2.js"
import "/IGP Projects/engine/geometry/Line2.js"
import "/IGP Projects/engine/geometry/Rectangle2.js"
import "/IGP Projects/engine/geometry/Circle2.js"

import "/IGP Projects/engine/static/Collisions.js"
import "/IGP Projects/engine/static/CollisionsGeometric.js"
import "/IGP Projects/engine/static/Input.js"
import "/IGP Projects/engine/static/Globals.js"
import "/IGP Projects/engine/static/Time.js"
import "/IGP Projects/engine/static/EventSystem.js"

class Engine {
    isSystemPaused = false

    static gameLoop() {
        let canvas = document.querySelector("#canv");
        let ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        if (Input.keysUpThisFrame.includes("KeyP")) {
            if (Engine.isSystemPaused) {
                Engine.isSystemPaused = false;
            }
            else {
                Engine.isSystemPaused = true;
            }
        }
        Engine.currentScene.draw(ctx);
        if (!Engine.isSystemPaused) {
            Engine.currentScene._start(ctx)
            Engine.currentScene.update(ctx)
            Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(go => go.markForDestroy == false);
        }
        Input.update()
    }

    static setup() {
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)

        document.addEventListener("mousemove", Input.mousemove)
        document.addEventListener("mouseup", Input.mouseup);

        setInterval(Engine.gameLoop, Time.ms)
    }

}

window.Engine = Engine