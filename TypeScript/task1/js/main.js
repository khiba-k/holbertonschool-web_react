var teacher3 = {
    firstName: "Maria",
    fullTimeEmployee: true,
    lastName: "Montessori",
    location: "Italy",
    contract: true,
};
var director1 = {
    firstName: "John",
    lastName: "Dewey",
    fullTimeEmployee: true,
    location: "Vermont",
    numberOfReports: 5,
};
console.log(teacher3);
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher("Maria", "Montessori"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Maria", "Montessori");
console.log(student.displayName());
console.log(student.workOnHomework());
