class PlayerComponent extends Component {
    constructor() {
        super()
        this.mapX = (window.innerWidth - 1600) / 2
        this.mapY = (window.innerHeight - 800) / 2
    }

    update() {
        for (let i = 0; i < Globals.mapping.length; i++) {
            for (let j = 0; j < Globals.mapping[i].length; j++) {
                if (Globals.mapping[i][j] >= 0) {
                    if ((this.parent.transform.x - this.mapX + 21) > i * 80 &&
                        (this.parent.transform.x - this.mapX - 21) < (i + 1) * 80 &&
                        (this.parent.transform.y - this.mapY + 21) > j * 80 &&
                        (this.parent.transform.y - this.mapY - 21) < (j + 1) * 80
                    ) {
                        console.log(i + " " + j + " " + this.transform.x + " " + this.transform.y)
                        Engine.currentScene = new LoseScene();
                    }
                }
            }
        }
        if (this.transform.x < this.mapX || this.transform.x > Globals.screenX - this.mapX || this.transform.y < this.mapY || this.transform.y > Globals.screenY - this.mapY) {
            Engine.currentScene = new WinScene();
        }
    }
}

window.PlayerComponent = PlayerComponent
export default PlayerComponent