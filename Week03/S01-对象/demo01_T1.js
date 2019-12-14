var obj = {
  Name: "Amons",
  Company: "ThoughtWorks",
  Age: 100,
  Ability: function() {
    console.log("Hello");
  },
  isMale: true,
  Hobby: ["Coding", "Games"],
  Pets: { Name: "fatCat", Age: 12 }
};

console.log(obj);
console.log(obj.Ability());
