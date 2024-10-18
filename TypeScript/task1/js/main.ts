interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

const teacher: Teacher = {
  firstName: "Maria",
  lastName: "Montessori",
  fullTimeEmployee: true,
  location: "Italy",
  contract: true,
  subject: "Mathematics",
};
console.log(teacher);

const director: Directors = {
  firstName: "John",
  lastName: "Dewey",
  fullTimeEmployee: false,
  location: "USA",
  numberOfReports: 10,
};

console.log(director);

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

const teacher1 = printTeacher("Rudolf", "Steiner");
console.log(teacher1);

class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new Student("Khiba", "Koenane");
console.log(student1.displayName());
console.log(student1.workOnHomework());
