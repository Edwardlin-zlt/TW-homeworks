var name = 'window-Jack';
var person = {
 name : 'person-Rose',
 greeting: function() {
   console.log('Hi! I\'m ' + this.name + '.');
 }
}
var greeting = person.greeting;
greeting();

// Code run 和 浏览器结果不一致?