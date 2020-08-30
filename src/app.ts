console.log('your code goes here .....!');

// function Logger(constructor: Function) {
//   console.log('Logging ...');
//   console.log(constructor);
// }

// Decorator factory gives more control
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    //I am not interested in the constructor
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}
@WithTemplate('<h1>Hey there</h1>', 'app')
@Logger('Logging - Person') // in the second case Logger has 2 b executed
class Person {
  name = 'Max';

  constructor() {
    console.log('crating person ...');
  }
}

const person = new Person();

console.log(person);

// ----

class Product {
  constructor(private title: string, private _price: number) {}

  set price(val: number) {
    if (val > 0) this._price = val;
  }
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
  getTitle (){
      return this.title;
  }
}

let prod = new Product("dfkls", 22);
console.log(prod.getTitle);
