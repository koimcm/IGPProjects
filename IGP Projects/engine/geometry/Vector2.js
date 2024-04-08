class Vector2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    getAdd(other) {
      return new Vector2(this.x + other.x, this.y + other.y);
    }
    getSubtract(other) {
      return new Vector2(this.x - other.x, this.y - other.y);
    }
    getLengthSquared() {
      return this.x ** 2 + this.y ** 2;
    }
    getLength() {
      return Math.sqrt(this.getLengthSquared());
    }
    getNormalized() {
      return new Vector2(this.x / this.getLength(), this.y / this.getLength());
    }
    getScaled(scalar) {
      return new Vector2(this.x * scalar, this.y * scalar);
    }
    getDot(other) {
      return this.x * other.x + this.y * other.y
    }
  }
  
  window.Vector2 = Vector2;