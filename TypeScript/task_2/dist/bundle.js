/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// task5
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (salary < 500 && typeof salary === "number") {
        return new Teacher();
    }
    if (salary >= 500 && typeof salary === "number") {
        return new Director();
    }
};
var newEmployee = createEmployee(600);
// newEmployee?.workFromHome();
console.log(newEmployee === null || newEmployee === void 0 ? void 0 : newEmployee.workFromHome());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVE7QUFjUjtJQUFBO0lBWUEsQ0FBQztJQVhDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRDtJQUFBO0lBWUEsQ0FBQztJQVhDLDhCQUFZLEdBQVo7UUFDRSxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0UsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFFRCxJQUFNLGNBQWMsR0FBRyxVQUFDLE1BQWM7SUFDcEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDdEI7SUFDRCxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQy9DLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztLQUN2QjtBQUNILENBQUMsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QywrQkFBK0I7QUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YXNrNVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCkge1xuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4gIH1cblxuICB3b3JrRGlyZWN0b3JUYXNrcygpIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCI7XG4gIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XG4gIH1cblxuICB3b3JrVGVhY2hlclRhc2tzKCkge1xuICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUVtcGxveWVlID0gKHNhbGFyeTogbnVtYmVyKSA9PiB7XG4gIGlmIChzYWxhcnkgPCA1MDAgJiYgdHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICB9XG4gIGlmIChzYWxhcnkgPj0gNTAwICYmIHR5cGVvZiBzYWxhcnkgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4gIH1cbn07XG5cbmNvbnN0IG5ld0VtcGxveWVlID0gY3JlYXRlRW1wbG95ZWUoNjAwKTtcbi8vIG5ld0VtcGxveWVlPy53b3JrRnJvbUhvbWUoKTtcbmNvbnNvbGUubG9nKG5ld0VtcGxveWVlPy53b3JrRnJvbUhvbWUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=