function Person(name, age, job) {
  this.name = name;
  Person.prototype = {
    constructor: Person,
    sayName: function () {
      console.log(this.name);
    }
  };
}

const person1 = new Person("DeepSpace");
const person2 = new Person("Edward");

// person1.sayName();
person2.sayName();