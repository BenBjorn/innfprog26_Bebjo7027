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

// 2. Gjennomsnittskarakter (som bokstavkarakter, rundet opp)
// Konverterer streng-karakter ("6") til tall-score (6) ved å slå opp i grades-arrayen med .filter
const gradeScores = students.map(s => grades.filter(g => g.score == s.grade)[0].score)

// Regner ut summen ved hjelp av .map
let sumGrades = 0
gradeScores.map(score => sumGrades += score)

const exactAvgGrade = sumGrades / students.length

// Betinget logikk for å runde OPP til nærmeste heltall (A=6, B=5, C=4, D=3, E=2, F=1)
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

<<<<<<< Updated upstream
// Finner bokstavkarakter ved hjelp av .filter
const averageGradeLetter = grades.filter(g => g.score === avgGradeNumber)[0].letter

document.getElementById('averageGrade').textContent = averageGradeLetter

// 3. Tell og skriv ut antall av hver karakter (A til F) med .filter()
document.getElementById('gradeA').textContent = students.filter(s => s.grade === "6").length
document.getElementById('gradeB').textContent = students.filter(s => s.grade === "5").length
document.getElementById('gradeC').textContent = students.filter(s => s.grade === "4").length
document.getElementById('gradeD').textContent = students.filter(s => s.grade === "3").length
document.getElementById('gradeE').textContent = students.filter(s => s.grade === "2").length
document.getElementById('gradeF').textContent = students.filter(s => s.grade === "1").length

// 4. Gjennomsnittsalder (rundet til to desimaler)
let sumAge = 0;
students.map(s => sumAge += s.age)

const averageAge = (sumAge / students.length).toFixed(2)
document.getElementById('averageAge').textContent = averageAge

// 5. Antall rett fra videregående (19 år) med .filter()
document.getElementById('highSchool').textContent = students.filter(s => s.age === 19).length

// 6. Antall med yrkeserfaring (workexperience >= 1) med .filter()
document.getElementById('workExperience').textContent = students.filter(s => s.workexperience >= 1).length
=======
//Antall karakterer
grades.map(a => {
    const studentTeller = students.filter(b => 4 === a.score).length
const elementPiss = document.getElementById(`grade${a.letter}`)
    
    if(elementPiss){
        elementPiss.innerHTML = studentTeller
    }
})
>>>>>>> Stashed changes
