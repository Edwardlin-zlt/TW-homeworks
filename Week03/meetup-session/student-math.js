var studentsGrade = [
  {
    name: "jack",
    chinese: 94,
    math: 86,
    english: 90
  },
  {
    name: "rose",
    chinese: 91,
    math: 85,
    english: 100
  },
  {
    name: "frank",
    chinese: 97,
    math: 100,
    english: 93
  },
  {
    name: "mary",
    chinese: 94,
    math: 89,
    english: 78
  }
];


// 1. sort method
result = studentsGrade.sort((a, b) => a.math - b.math);
console.log(result)
