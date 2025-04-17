/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};
console.log("Teacher: ", teacher3);
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log("Director: ", director1);
var printTeacher = function (firstName, lastName) {
    var initial = [firstName.split("")[0]];
    return "".concat(initial, ". ").concat(lastName);
};
console.log("Print Teacher: ", printTeacher("John", "Doe"));
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
var student = new StudentClass("Khiba", "Koenane");
console.log("Student is ", student.workOnHomework(), "on homework");
console.log("Student Name: ", student.displayName());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFPbkMsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQVFyQyxJQUFNLFlBQVksR0FBaUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUNyRCxJQUFNLE9BQU8sR0FBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEQsT0FBTyxVQUFHLE9BQU8sZUFBSyxRQUFRLENBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQWM1RDtJQUdFLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFFRCxJQUFNLE9BQU8sR0FBaUIsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRhc2sxXG5pbnRlcmZhY2UgVGVhY2hlciB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICB5ZWFyc09mRXhwZXJpZW5jZT86IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxhc3ROYW1lOiBcIkRvZVwiLFxuICBsb2NhdGlvbjogXCJMb25kb25cIixcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcblxuY29uc29sZS5sb2coXCJUZWFjaGVyOiBcIiwgdGVhY2hlcjMpO1xuXG4vLyBUYXNrMlxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gIGxhc3ROYW1lOiBcIkRvZVwiLFxuICBsb2NhdGlvbjogXCJMb25kb25cIixcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5jb25zb2xlLmxvZyhcIkRpcmVjdG9yOiBcIiwgZGlyZWN0b3IxKTtcblxuLy8gVGFzazNcblxuaW50ZXJmYWNlIFByaW50VGVhY2hlciB7XG4gIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBQcmludFRlYWNoZXIgPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuICBjb25zdCBpbml0aWFsOiBBcnJheTxzdHJpbmc+ID0gW2ZpcnN0TmFtZS5zcGxpdChcIlwiKVswXV07XG5cbiAgcmV0dXJuIGAke2luaXRpYWx9LiAke2xhc3ROYW1lfWA7XG59O1xuXG5jb25zb2xlLmxvZyhcIlByaW50IFRlYWNoZXI6IFwiLCBwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpKTtcblxuLy8gVGFzazRcbmludGVyZmFjZSBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciB7XG4gIG5ldyAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3M7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NUeXBlIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NUeXBlIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICB9XG5cbiAgd29ya09uSG9tZXdvcmsoKSB7XG4gICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcbiAgfVxuXG4gIGRpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG5jb25zdCBzdHVkZW50OiBTdHVkZW50Q2xhc3MgPSBuZXcgU3R1ZGVudENsYXNzKFwiS2hpYmFcIiwgXCJLb2VuYW5lXCIpO1xuY29uc29sZS5sb2coXCJTdHVkZW50IGlzIFwiLCBzdHVkZW50LndvcmtPbkhvbWV3b3JrKCksIFwib24gaG9tZXdvcmtcIik7XG5jb25zb2xlLmxvZyhcIlN0dWRlbnQgTmFtZTogXCIsIHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=