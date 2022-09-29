class Shape {
    constructor (selector){
        this.el = document.querySelector(selector);
    }
    
    draw(){
       this.el.style.display = 'block'
    }

}


class Square extends Shape {
    
    constructor (size, color){
        super('.square1')
        this.el.style.width = this.el.style.height = size + 'px';
        this.el.style.background = color;
        this.el.style.display = 'none'
    }
}



let square1 = new Square(100, 'green');

square1.draw();


class Circle extends Shape {
    
    constructor (radius, color){
        super('.circle1')
        this.el.style.borderRadius = radius + '%';
        this.el.style.background = color;
        this.el.style.display = 'none';
    }
}

let circle1 = new Circle(50, 'red');
circle1.draw();


class Rectangle extends Shape {
    
    constructor (width, height, color){
        super('.rectangle')
        this.el.style.width = width + 'px';
        this.el.style.height = height + 'px';
        this.el.style.backgound = color;
        this.el.style.display = none;
    }
}

let rect = new Rectangle (100, 50, 'blue');
rect.draw();

