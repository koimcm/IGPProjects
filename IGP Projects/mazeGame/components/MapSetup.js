class MapSetup extends Component {
    constructor() {
        super()
        this.mapSetup = 0
        this.validPath = 0
    }
    update() {
        if (this.mapSetup < 1) {
            for (let i = 0; i < Globals.mapping.length; i++) {
                for (let j = 0; j < Globals.mapping[i].length; j++) {
                    let rand = Math.random()
                    if (rand > .8) {
                        Globals.mapping[i][j]++;
                    }
                }
            }
            if (this.mapSetup < 1) {
                this.GBFS(9, 6, 0, 0)
                //GBFS(12,5,20,10)
                this.mapSetup++
            }
        }
    }
    // pseudocode from https://en.wikipedia.org/wiki/Best-first_search 
    // Greedy best first search, i,j current, x,y target 
    GBFS(i, j, x, y) {
        let mapCopy = Globals.mapping;
        let queue = [];
        queue.push(i);
        queue.push(j);
        while (queue.length != 0) {
            let currentX = 40;
            let currentXQueuePos = 0;
            let currentY = 20;
            let currentYQueuePos = 0;
            for (let a = 0; a < queue.length; a += 2) {
                if ((Math.abs(x - queue[a]) + Math.abs(y - queue[a + 1])) <= Math.abs(currentX - x + currentY - y)) {
                    currentX = queue[a]
                    currentXQueuePos = a;
                    currentY = queue[a + 1]
                    currentYQueuePos = a + 1;
                }
            }
            queue.splice(currentXQueuePos, 2)
            if (currentX == x || currentY == y) {
                this.validPath = 1;
                break;
            }
            for (let n = 0; n < 4; n++) {
                if (n == 0) {
                    if (mapCopy[currentX - 1][currentY] == 0) {
                        queue.push(currentX - 1)
                        queue.push(currentY)
                        mapCopy[currentX - 1][currentY] = -1
                    }
                }
                else if (n == 1) {
                    if (mapCopy[currentX + 1][currentY] == 0) {
                        queue.push(currentX + 1)
                        queue.push(currentY)
                        mapCopy[currentX + 1][currentY] = -1
                    }
                }
                else if (n == 2) {
                    if (mapCopy[currentX][currentY - 1] == 0) {
                        queue.push(currentX)
                        queue.push(currentY - 1)
                        mapCopy[currentX][currentY - 1] = -1
                    }
                }
                else {
                    if (mapCopy[currentX][currentY + 1] == 0) {
                        queue.push(currentX)
                        queue.push(currentY + 1)
                        mapCopy[currentX][currentY + 1] = -1
                    }
                }
            }

        }
        Globals.mapping = mapCopy;
    }
}

window.MapSetup = MapSetup
export default MapSetup