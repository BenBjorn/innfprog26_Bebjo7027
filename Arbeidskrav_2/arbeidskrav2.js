const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

//Antall studenter
document.getElementById("studentCount").innerHTML = students.length

//Gjennomsnittskarakter
const gradeScores = students.map(s => grades.filter(g => g.score == s.grade)[0].score)

let sumGrades = 0
gradeScores.map(score => sumGrades += score)

const exactAvgGrade = sumGrades / students.length

let avgGradeNumber = 1
if (exactAvgGrade > 5) {
avgGradeNumber = 6
} else if (exactAvgGrade > 4) {
avgGradeNumber = 5
} else if (exactAvgGrade > 3) {
avgGradeNumber = 4
} else if (exactAvgGrade > 2) {
avgGradeNumber = 3
} else if (exactAvgGrade > 1) {
avgGradeNumber = 2
}

const averageGradeLetter = grades.filter(g => g.score === avgGradeNumber)[0].letter

document.getElementById("averageGrade").innerHTML = averageGradeLetter

//Antall hver karakter
document.getElementById("gradeA").innerHTML = students.filter(s => s.grade === "6").length
document.getElementById("gradeB").innerHTML = students.filter(s => s.grade === "5").length
document.getElementById("gradeC").innerHTML = students.filter(s => s.grade === "4").length
document.getElementById("gradeD").innerHTML = students.filter(s => s.grade === "3").length
document.getElementById("gradeE").innerHTML = students.filter(s => s.grade === "2").length
document.getElementById("gradeF").innerHTML = students.filter(s => s.grade === "1").length

//Gjennomsnittsalder
let sumAge = 0;
students.map(s => sumAge += s.age)

const averageAge = (sumAge / students.length).toFixed(2)
document.getElementById("averageAge").innerHTML = averageAge

//Antall rett fra videregående
document.getElementById("highSchool").innerHTML = students.filter(s => s.age === 19).length

//Antall med yrkeserfaring
document.getElementById("workExperience").innerHTML = students.filter(s => s.workexperience >= 1).length
