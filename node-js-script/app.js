import fs from "fs";

const text = fs.readFileSync("students.json");
const students = JSON.parse(text);

console.log("Original Data:");
console.log(students);

students.forEach(student => {
    let total = 0;

    student.marks.forEach(mark => {
        total += mark;
    });

    student.total = total;
    student.average = total / student.marks.length;
});

console.log("\nUpdated Data:");
console.log(students);

const outputText = JSON.stringify(students, null, 2);
fs.writeFileSync("output.json", outputText);
