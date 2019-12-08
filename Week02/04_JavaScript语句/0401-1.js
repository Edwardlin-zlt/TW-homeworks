function gradeJudge(grade) {
  if (grade >= 95 && grade <= 100) {
    console.log("卓越");
  } else if (grade >= 85 && grade < 95) {
    console.log("优秀");
  } else if (grade >= 75 && grade < 85) {
    console.log("一般");
  } else if (grade >= 60 && grade < 75) {
    console.log("及格");
  } else if (grade < 60) {
    console.log("不及格");
  } else {
    console.log("不合理的成绩");
  }
}

var grades = [12, 23, 52, 43, 67, 93, 234, 83, 73];

for (grade of grades) {
  gradeJudge(grade);
}
