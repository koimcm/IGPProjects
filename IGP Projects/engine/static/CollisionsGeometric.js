class CollisionsGeometric{
    static isRectangle2Rectangle2Collision(one, two) {
        if (
            one.centerX - one.width/ 2 >   two.centerX + two.width / 2 ||
            one.centerX + one.width/ 2 <   two.centerX - two.width / 2 ||
            one.centerY - one.height / 2 > two.centerY + two.height / 2 ||
            one.centerY + one.height / 2 < two.centerY - two.height / 2
        )
            return false;
        return true;
    }
    static isVector2Rectangle2Collision(vector2, rectangle2) {
        if (
            vector2.x > rectangle2.centerX - rectangle2.width / 2 &&
            vector2.x < rectangle2.centerX + rectangle2.width / 2 &&
            vector2.y > rectangle2.centerY - rectangle2.height / 2 &&
            vector2.y < rectangle2.centerY + rectangle2.height / 2
        )
            return true;
        return false;
    }
    static isVector2Circle2Collision(vector2, circle2) {
        let distance = Math.sqrt((vector2.x - circle2.centerX) ** 2 + (vector2.y - circle2.centerY) ** 2);
        return distance < circle2.radius
    }
    static isCircle2Circle2Collision(one, two) {
        let distance = Math.sqrt((one.centerX - two.centerX) ** 2 + (one.centerY - two.centerY) ** 2)
        if (one.radius + two.radius > distance)
            return true;
        return false;
    }
    static isCircle2Line2Collision(circle2, line2){
        let step1Result = CollisionsGeometric.isVector2Circle2Collision(line2.one, circle2)
        if(step1Result)
            return true;
        let step2Result = CollisionsGeometric.isVector2Circle2Collision(line2.two, circle2)
        if(step2Result)
            return true;
        let baUnnormalized = line2.two.getSubtract(line2.one);
        let ba = line2.two.getSubtract(line2.one).getNormalized();
        let ca = new Vector2(circle2.centerX, circle2.centerY).getSubtract(line2.one);
        let dotProduct = ba.getDot(ca);
        let scaledBA = ba.getScaled(dotProduct);
        let infiniteLinePoint = line2.one.getAdd(scaledBA);
        if(dotProduct < 0)
            infiniteLinePoint = line2.one
        if(dotProduct > baUnnormalized.getLength())
            infiniteLinePoint = line2.two

        let step3Result = CollisionsGeometric.isVector2Circle2Collision(infiniteLinePoint, circle2)
        return step3Result;
    }
    static isCircle2Rectangle2Collision(circle2, rectangle2){
      let center = new Vector2(circle2.centerX, circle2.centerY)
      let total = CollisionsGeometric.isVector2Rectangle2Collision(center, rectangle2)
      if(total == true){
        return true;
      }
      let upperLeft = new Vector2(rectangle2.centerX - rectangle2.width/2, rectangle2.centerY - rectangle2.height/2)
      let lowerLeft = new Vector2(rectangle2.centerX - rectangle2.width/2, rectangle2.centerY + rectangle2.height/2)
      let lowerRight = new Vector2(rectangle2.centerX + rectangle2.width/2, rectangle2.centerY + rectangle2.height/2)
      let upperRight = new Vector2(rectangle2.centerX + rectangle2.width/2, rectangle2.centerY - rectangle2.height/2)

      let line1 = new Line2(upperLeft, lowerLeft)
      let line2 = new Line2(lowerLeft, lowerRight)
      let line3 = new Line2(lowerRight, upperRight)
      let line4 = new Line2(upperRight, upperLeft)

      let lines = [line1, line2, line3, line4]
      for(let line of lines){
        if(CollisionsGeometric.isCircle2Line2Collision(circle2, line))
            return true;
      }

      return false;



    }

}

window.CollisionsGeometric = CollisionsGeometric