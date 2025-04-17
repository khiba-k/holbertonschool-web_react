// Task1
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: string;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log("Teacher: ", teacher3);

// Task2
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log("Director: ", director1);

// Task3

interface PrintTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacher = (firstName, lastName) => {
  const initial: Array<string> = [firstName.split("")[0]];

  return `${initial}. ${lastName}`;
};

console.log("Print Teacher: ", printTeacher("John", "Doe"));

// Task4
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassType {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassType {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}

const student: StudentClass = new StudentClass("Khiba", "Koenane");
console.log("Student is ", student.workOnHomework(), "on homework");
console.log("Student Name: ", student.displayName());
