// Javascript Snippets to Practice.js

// 📌 Class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
person2.sayHello(); // Output: "Hello, my name is Jane and I am 25 years old."

// In this example, the Person class has two properties, name and age, which are set in the constructor. It also has a method, sayHello(), which logs a message to the console that includes the values of the name and age properties.

// You can create new instances of the Person class by using the new keyword, followed by the class name, and passing in any required arguments to the constructor. Each instance will have its own set of properties and methods, but they will all share the same blueprint.

// You can methods to the class

Person.prototype.gender = "";
Person.prototype.setGender = function(gender) {
    this.gender = gender;
};
person1.setGender("male");
console.log(person1.gender) // Output: "male"



// Make new instances of the class

const Yumna = new Person('Yumna', 23);