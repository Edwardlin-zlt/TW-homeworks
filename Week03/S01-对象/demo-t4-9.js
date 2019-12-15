var name = 'window-Jack';
var person = {
 name : 'person-Rose',
 greeting: function() {
   console.log('Hi! I\'m ' + this.name + '.');
 }
}
person.greeting.apply(this);