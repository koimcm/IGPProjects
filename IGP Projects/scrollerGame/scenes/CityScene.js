// Ideas
// City with bunch of buildnings, have to climb up them
// Trampolines, counter for how high you go, maybe counter for how many jumps you make?
// Have to figure out physics,, how jump works??
// Flag at top to end



class CityScene extends Scene{
    constructor(){
        super()
    }
    start(ctx){
        let circleGObj = new GameObject("CircleGameObject")
        circleGObj.addComponent(new Circle())
        GameObject.instantiate(circleGObj, window.innerWidth/2, window.innerHeight-32, 30)
    }
}

window.CityScene = CityScene