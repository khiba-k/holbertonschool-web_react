interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

interface Table {
  firstName: string;
  location: string;
}

const student1: Student = {
  firstName: "Peter",
  lastName: "Parker",
  age: 18,
  location: "New York City",
};
const student2: Student = {
  firstName: "Chase",
  lastName: "Devenport",
  age: 16,
  location: "Salt Lake City",
};

const studentsList: Array<Student> = [student1, student2];
// let studentTable: Array<Table> = [];

const renderTable = () => {
  const body: HTMLElement | null = document.getElementsByTagName("body")[0];

  // Define table and add heaers
  const table: HTMLTableElement = document.createElement("table");

  const tableHeaderRow: HTMLTableRowElement = document.createElement("tr");

  const name: HTMLTableCellElement = document.createElement("th");
  name.textContent = "FirstName";
  tableHeaderRow.appendChild(name);

  const location: HTMLTableCellElement = document.createElement("th");
  location.textContent = "Location";
  tableHeaderRow.appendChild(location);

  table.appendChild(tableHeaderRow);

  studentsList.map((student) => {
    // Create row for each student element
    const studentRow: HTMLTableRowElement = document.createElement("tr");

    const studentName: HTMLTableCellElement = document.createElement("td");
    studentName.textContent = student.firstName;
    studentRow.appendChild(studentName);

    const studentLocation: HTMLTableCellElement = document.createElement("td");
    studentLocation.textContent = student.location;
    studentRow.appendChild(studentLocation);

    table.appendChild(studentRow);
  });

  body?.appendChild(table);
};

renderTable();
