//Q8
function gradeScore(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "F";
  }
}

// Tests
console.log(gradeScore(85)); // A
console.log(gradeScore(62)); // B
console.log(gradeScore(45)); // D
console.log(gradeScore(30)); // F