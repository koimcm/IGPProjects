class PlayerGameObject extends GameObject{
    constructor(name = "PlayerGameObject"){
        super(name)
    }
    start(ctx){
        this.addComponent(new CircleGameObject())
    }
}