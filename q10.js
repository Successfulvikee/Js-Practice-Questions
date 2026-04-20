//Q10
function summarizeStudent(students) {
  return students.map(student => {
    let grade;

    if (student.score >= 70) {
      grade = "A";
    } else if (student.score >= 60) {
      grade = "B";
    } else if (student.score >= 50) {
      grade = "C";
    } else if (student.score >= 40) {
      grade = "D";
    } else {
      grade = "F";
    }

    return `${student.name} scored ${student.score} — Grade: ${grade}`;
  });
}

// Test
const students = [
  { name: "Amara", score: 88 },
  { name: "John", score: 62 },
  { name: "Grace", score: 45 }
];

console.log(summarizeStudent(students));