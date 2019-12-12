var colors = ["Red", "Green", "White", "Black"];
// case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.join());
