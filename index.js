// Your code here
class Polygon {
  constructor(srcArray) {
      this.sideLengths = srcArray;
  }

  get countSides() {
      return this.sideLengths.length;
  }

  get perimeter() {
      return this.sideLengths.reduce(function(total, current) {
          return total + current
      })
  }
}

class Triangle extends Polygon {
  get isValid() {
      if (this.sideLengths[0] + this.sideLengths[1] < this.sideLengths[2]) {
        return false
      } else if (this.sideLengths[0] + this.sideLengths[2] < this.sideLengths[1]) {
        return false
      } else if (this.sideLengths[1] + this.sideLengths[2] < this.sideLengths[0]) {
        return false
      } else {
        return true
      }
  }
}

class Square extends Polygon {
  get isValid() {
      if (this.sideLengths[0] === this.sideLengths[1] && this.sideLengths[1] === this.sideLengths[2] && this.sideLengths[2] === this.sideLengths[3]) {
        return true
      } else { 
        return false
      }
  }

  get area() {
      return this.sideLengths[0] ** 2
  }

}