/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
var emp1 = createEmployee(200);
var emp2 = createEmployee(1000);
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
    throw new Error("Invalid subject");
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
console.log('executeWork(emp1):', executeWork(emp1));
console.log('executeWork(emp2):', executeWork(emp2));
console.log('createEmployee(200):', createEmployee(200));
console.log('createEmployee(1000):', createEmployee(1000));
console.log('createEmployee("$500"):', createEmployee('$500'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBO0lBQUE7SUFZQSxDQUFDO0lBWEEsK0JBQVksR0FBWjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDQyxPQUFPLHdCQUF3QixDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUdEO0lBQUE7SUFZQSxDQUFDO0lBWEEsOEJBQVksR0FBWjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDQyxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQztBQUdELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzlDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDL0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3JCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFDRCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUMvQyxPQUFRLFFBQXFCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQy9ELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUNoRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3BDO1NBQU07UUFDTixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ25DO0FBQ0YsQ0FBQztBQUVELElBQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxJQUFNLElBQUksR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFLbEMsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDdEMsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU8sZUFBZSxDQUFDO0tBQ3hCO1NBQU0sSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQ25DLE9BQU8sa0JBQWtCLENBQUM7S0FDM0I7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDckMsQ0FBQztBQUdELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUduQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFHckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZztcblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuXHR3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG5cdHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcblx0fVxuXG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcblx0fVxuXG5cdHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcblx0fVxufVxuXG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xuXHR9XG5cblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuXHR9XG5cblx0d29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcblx0fVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcblx0aWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuXHRcdHJldHVybiBuZXcgVGVhY2hlcigpO1xuXHR9XG5cdHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcblx0cmV0dXJuIChlbXBsb3llZSBhcyBEaXJlY3Rvcikud29ya0RpcmVjdG9yVGFza3MgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHN0cmluZyB7XG5cdGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuXHRcdHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG5cdH1cbn1cblxuY29uc3QgZW1wMSA9IGNyZWF0ZUVtcGxveWVlKDIwMCk7XG5jb25zdCBlbXAyID0gY3JlYXRlRW1wbG95ZWUoMTAwMCk7XG5cblxudHlwZSBTdWJqZWN0cyA9IFwiTWF0aFwiIHwgXCJIaXN0b3J5XCI7XG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICBpZiAodG9kYXlDbGFzcyA9PT0gXCJNYXRoXCIpIHtcbiAgICByZXR1cm4gXCJUZWFjaGluZyBNYXRoXCI7XG4gIH0gZWxzZSBpZiAodG9kYXlDbGFzcyA9PT0gXCJIaXN0b3J5XCIpIHtcbiAgICByZXR1cm4gXCJUZWFjaGluZyBIaXN0b3J5XCI7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN1YmplY3RcIik7XG59XG5cblxuY29uc29sZS5sb2codGVhY2hDbGFzcyhcIk1hdGhcIikpO1xuY29uc29sZS5sb2codGVhY2hDbGFzcyhcIkhpc3RvcnlcIikpO1xuXG5cbmNvbnNvbGUubG9nKCdleGVjdXRlV29yayhlbXAxKTonLCBleGVjdXRlV29yayhlbXAxKSk7XG5jb25zb2xlLmxvZygnZXhlY3V0ZVdvcmsoZW1wMik6JywgZXhlY3V0ZVdvcmsoZW1wMikpO1xuXG5cbmNvbnNvbGUubG9nKCdjcmVhdGVFbXBsb3llZSgyMDApOicsIGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuY29uc29sZS5sb2coJ2NyZWF0ZUVtcGxveWVlKDEwMDApOicsIGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcbmNvbnNvbGUubG9nKCdjcmVhdGVFbXBsb3llZShcIiQ1MDBcIik6JywgY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=