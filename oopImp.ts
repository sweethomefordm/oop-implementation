/*
Можно попробовать имплементировать принцыпы ООП на классах.

*/


class Rect {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  getWidth() {
    return this.#width;
  }

  getHeight() {
    return this.#height;
  }

  setWidth(newWidth) {
    this.#width = newWidth;
  }

  setHeight(newHeight) {
    this.#height = newHeight;
  }

  calcArea() {
    return this.#width * this.#height;
  }
}

test(
    tobe(
        ()=> {
            cosnt rectInstance = new Rect;
                
            return rectInstance();
        }
    ).expect('{}')
);


const instRect = new Rect(2, 4);
console.log(instRect.calcArea()); // 8

console.log(instRect.#width); // Error: Private field '#width' must be declared in an enclosing class
console.log(instRect.#height); // Error: Private field '#height' must be declared in an enclosing class
console.dir(Rect)
console.dir(instRect)
instRect.setWidth(3);
instRect.setHeight(5);
console.log(instRect.calcArea()); // 15


/*
 Полиморфизм:
  
*/
