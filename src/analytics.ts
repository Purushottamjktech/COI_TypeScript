console.log("my name is purushottam Kumar")

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.warn(logString);

//     console.log(constructor);
//   };
// }

// function WithTemplete(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @WithTemplete("<h1>my Person Object</h1>", "app")
// class Person {
//   name = "max";

//   constructor() {
//     console.warn("Creating person object...");
//   }
// }

// const pers = new Person();
// console.warn(pers);

// /////

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator");
//   console.warn(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("accessor decortor!");
//   console.warn(target);
//   console.log(name);
//   console.warn(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("method decorator");

//   console.warn(target);
//   console.log(name);
//   console.warn(descriptor);
// }

// // parameter decorator

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("parameter decorator");

//   console.warn(target);
//   console.log(name);
//   console.warn(position + "parameter index");
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
