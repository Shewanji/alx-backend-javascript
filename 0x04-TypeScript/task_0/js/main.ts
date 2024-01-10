// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Shalma",
  lastName: "Gacheri",
  age: 13,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Peter",
  lastName: "Karanja",
  age: 30,
  location: "Nyandarua",
};

// Create an array named studentsList
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement("table");

// Append a new row for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
