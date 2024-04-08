import "../components/InputComponent.js";
import "../components/PlayerComponent.js";
import "../components/MapSetup.js";
import "../components/MapDraw.js";
import "../components/ScoreUpdater.js";


class MazeScene extends Scene {
    constructor() {
        super();
        this.x = 800;
        this.y = 400;

        Globals.score = 0;
        Globals.screenX = 1600;
        Globals.screenY = 800;
        Globals.mapping = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, -2, -2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        Globals.mapSetup = 0;
        Globals.validPath = 0;
    }
    start(ctx){
        let mapGObj = new GameObject("MapGameObject")
        mapGObj.addComponent(new MapSetup())
        mapGObj.addComponent(new MapDraw())
        this.gameObjects.push(mapGObj)

        let circleGObj = new GameObject("CircleGameObject")
        circleGObj.addComponent(new Circle())
        circleGObj.addComponent(new PlayerComponent())
        circleGObj.addComponent(new InputComponent())
        GameObject.instantiate(circleGObj, window.innerWidth / 2 - Globals.screenX / 2 + 800, window.innerHeight / 2 - Globals.screenY / 2 + 400)
        console.log(circleGObj.transform.x + " " + circleGObj.transform.y)

        let scoreGObj = new GameObject("ScoreGameObject")
        scoreGObj.addComponent(new ScoreUpdater())
        this.gameObjects.push(scoreGObj)
        console.log(":3")
    }
}

window.MazeScene = MazeScene