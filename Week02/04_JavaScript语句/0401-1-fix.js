function gradeJudge(grade) {
  switch (true) {
    case grade >= 95 && grade <= 100:
      console.log("卓越");
      break;
    case grade >= 85 && grade < 95:
      console.log("优秀");
      break;
    case grade >= 75 && grade < 85:
      console.log("一般");
      break;
    case grade >= 60 && grade < 75:
      console.log("及格");
      break;
    case grade < 60:
      console.log("不及格");
      break;
    default:
      console.log("不合理的成绩");
  }
}

var grades = [12, 23, 52, 43, 67, 93, 234, 83, 73];

for (grade of grades) {
  gradeJudge(grade);
}
