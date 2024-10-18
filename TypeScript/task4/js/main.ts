/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

const reactTeacher: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  experienceTeachingReact: 5,
};

console.log("\nTesting with React Teacher:");
react.setTeacher(reactTeacher);
console.log(react.getAvailableTeacher());

const javaTeacher: Subjects.Teacher = {
  firstName: "Mike",
  lastName: "Johnson",
  experienceTeachingJava: 8,
};

console.log("\nTesting with Java Teacher:");
java.setTeacher(javaTeacher);
console.log(java.getAvailableTeacher());
