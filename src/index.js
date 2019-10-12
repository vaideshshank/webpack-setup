// import '!!css-loader!./style.css'

import 'style-loader!bootstrap';
import "style-loader!./style.css";
class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
}


let p1=new Person('Vaidesh','vaidesh1999@gmail.com');
console.log(p1);

