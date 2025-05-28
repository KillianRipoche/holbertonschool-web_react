/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// =======================
// Tâche 10 : Nominal Typing & Branding
// =======================
// Fonction pour additionner deux MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'major',
    };
}
// Fonction pour additionner deux MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'minor',
    };
}
// =======================
// Exemple d'utilisation
// =======================
var major1 = { credits: 3, __brand: 'major' };
var major2 = { credits: 4, __brand: 'major' };
var minor1 = { credits: 1, __brand: 'minor' };
var minor2 = { credits: 2, __brand: 'minor' };
console.log('Total Major:', sumMajorCredits(major1, major2)); // { credits: 7, __brand: 'major' }
console.log('Total Minor:', sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: 'minor' }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBCQUEwQjtBQUMxQix1Q0FBdUM7QUFDdkMsMEJBQTBCO0FBYzFCLDhDQUE4QztBQUM5QyxTQUFTLGVBQWUsQ0FBQyxRQUFzQixFQUFFLFFBQXNCO0lBQ3JFLE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztRQUM1QyxPQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDO0FBQ0osQ0FBQztBQUVELDhDQUE4QztBQUM5QyxTQUFTLGVBQWUsQ0FBQyxRQUFzQixFQUFFLFFBQXNCO0lBQ3JFLE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztRQUM1QyxPQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDO0FBQ0osQ0FBQztBQUVELDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBRTFCLElBQU0sTUFBTSxHQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzlELElBQU0sTUFBTSxHQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBRTlELElBQU0sTUFBTSxHQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzlELElBQU0sTUFBTSxHQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztBQUNqRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFTDomNoZSAxMCA6IE5vbWluYWwgVHlwaW5nICYgQnJhbmRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEludGVyZmFjZSBwb3VyIE1ham9yQ3JlZGl0c1xuaW50ZXJmYWNlIE1ham9yQ3JlZGl0cyB7XG4gIGNyZWRpdHM6IG51bWJlcjtcbiAgcmVhZG9ubHkgX19icmFuZDogJ21ham9yJzsgLy8gcHJvcHJpw6l0w6kgdW5pcXVlIGRlIGJyYW5kaW5nXG59XG5cbi8vIEludGVyZmFjZSBwb3VyIE1pbm9yQ3JlZGl0c1xuaW50ZXJmYWNlIE1pbm9yQ3JlZGl0cyB7XG4gIGNyZWRpdHM6IG51bWJlcjtcbiAgcmVhZG9ubHkgX19icmFuZDogJ21pbm9yJzsgLy8gcHJvcHJpw6l0w6kgdW5pcXVlIGRlIGJyYW5kaW5nXG59XG5cbi8vIEZvbmN0aW9uIHBvdXIgYWRkaXRpb25uZXIgZGV1eCBNYWpvckNyZWRpdHNcbmZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhzdWJqZWN0MTogTWFqb3JDcmVkaXRzLCBzdWJqZWN0MjogTWFqb3JDcmVkaXRzKTogTWFqb3JDcmVkaXRzIHtcbiAgcmV0dXJuIHtcbiAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICBfX2JyYW5kOiAnbWFqb3InLFxuICB9O1xufVxuXG4vLyBGb25jdGlvbiBwb3VyIGFkZGl0aW9ubmVyIGRldXggTWlub3JDcmVkaXRzXG5mdW5jdGlvbiBzdW1NaW5vckNyZWRpdHMoc3ViamVjdDE6IE1pbm9yQ3JlZGl0cywgc3ViamVjdDI6IE1pbm9yQ3JlZGl0cyk6IE1pbm9yQ3JlZGl0cyB7XG4gIHJldHVybiB7XG4gICAgY3JlZGl0czogc3ViamVjdDEuY3JlZGl0cyArIHN1YmplY3QyLmNyZWRpdHMsXG4gICAgX19icmFuZDogJ21pbm9yJyxcbiAgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4ZW1wbGUgZCd1dGlsaXNhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbWFqb3IxOiBNYWpvckNyZWRpdHMgPSB7IGNyZWRpdHM6IDMsIF9fYnJhbmQ6ICdtYWpvcicgfTtcbmNvbnN0IG1ham9yMjogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiA0LCBfX2JyYW5kOiAnbWFqb3InIH07XG5cbmNvbnN0IG1pbm9yMTogTWlub3JDcmVkaXRzID0geyBjcmVkaXRzOiAxLCBfX2JyYW5kOiAnbWlub3InIH07XG5jb25zdCBtaW5vcjI6IE1pbm9yQ3JlZGl0cyA9IHsgY3JlZGl0czogMiwgX19icmFuZDogJ21pbm9yJyB9O1xuXG5jb25zb2xlLmxvZygnVG90YWwgTWFqb3I6Jywgc3VtTWFqb3JDcmVkaXRzKG1ham9yMSwgbWFqb3IyKSk7IC8vIHsgY3JlZGl0czogNywgX19icmFuZDogJ21ham9yJyB9XG5jb25zb2xlLmxvZygnVG90YWwgTWlub3I6Jywgc3VtTWlub3JDcmVkaXRzKG1pbm9yMSwgbWlub3IyKSk7IC8vIHsgY3JlZGl0czogMywgX19icmFuZDogJ21pbm9yJyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=