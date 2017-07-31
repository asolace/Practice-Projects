// ~~~~~~ 1
console.log("~~~~~~ 1")
var students1 = [
  { name : "Anthony" },
  { name : "Winnie" },
  { name : "Pawandeep" }
];

//Write a function that will print the name of all the students
//Example
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students) {
  for (var i = 0; i < students.length; i++) {
    console.log(students[i].name)
  }
}

printNames(students1); // uncomment when ready to test
console.log("\n")

// ~~~~~~ 2
console.log("~~~~~~ 2")
var students2 = [
  { name : "Anthony",
    id : 0},
  { name : "Winnie",
    id : 1},
  { name : "Pawandeep",
    id : 2}
];

//Write a function that will print the name and id of all the students
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2

function printStudents(students) {
  for (var i = 0; i < students.length; i++) {
    console.log(students[i].name + " is student #" + students[i].id)
  }
}

printStudents(students2); // uncomment when ready to test
console.log("\n")

//~~~~~3
console.log("~~~~~~ 3")
var students3 = [
  { name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},
              { id : 1, score : 20},
              { id : 2, score : 80}]},
  { name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},
              { id : 1, score : 56},
              { id : 2, score : 100}]},
  { name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},
              { id : 1, score : 92},
              { id : 2, score : 49}]}
];

//Write a function that will print the name of the student and their highest test score
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function gradeCheck(stud){
  var hg = 0;
  for (var x = 0; x < stud.grades.length; x++) {
    if (stud.grades[x].score > hg){
      hg = stud.grades[x].score;
    }
  }
  return hg;
};

function printBestGrade(students) {
 for (var i = 0; i < students.length; i++) {
   console.log(students[i].name, gradeCheck(students[i]));// prints name
 }
};

printBestGrade(students3); // uncomment when ready to test
console.log("\n");

//Write a function that will print the name of the student and their average test score
//Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pawandeep 73.33333333333333

function findAverage(student){
  var sum = 0;
  for (var i = 0; i < student.grades.length; i++) {
    sum = (student.grades[i].score + sum);
  }
  return sum / student.grades.length;
};


function printAverageGrade(students) {
  for (var i = 0; i < students.length; i++) {
    console.log(students[i].name, findAverage(students[i]));
  }
};

printAverageGrade(students3); // uncomment when ready to test
console.log("\n")

//~~~~BONUS

//Write a function that will print the id of each test and the name of the student
//who got the highest scores
//Example
// printBestStudent(students3)
// Test 0: Anthony
// Test 1: Pawandeep
// Test 2: Winnie

console.log("BONUS\n--------")
function printBestStudent(students) {
  var bestScore = {}

  for (var i = 0; i < students.length; i++) {
    var stud = students[i];
    for (var a = 0; a < stud.grades.length; a++) {
      var grade = stud.grades[a];
      if (bestScore[grade.id] === undefined) {
        bestScore[grade.id] = { name: stud.name, score: grade.score };
      }
      else if (grade.score > bestScore[grade.id].score){
        bestScore[grade.id] =  { name: stud.name, score: grade.score};
      }
    }
  }
  for (var id in bestScore){
    console.log("Test " + id + ": " + bestScore[id].name);
  }
}


printBestStudent(students3); // uncomment when ready to test
console.log("\n")
