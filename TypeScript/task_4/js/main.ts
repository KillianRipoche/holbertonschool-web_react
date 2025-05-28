import { Teacher } from './subjects/Teacher';
import Cpp from './subjects/Cpp';
import Java from './subjects/Java';
import React from './subjects/React';

const cpp = new Cpp();
const java = new Java();
const react = new React();

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 5,
  experienceTeachingJava: 0,
  experienceTeachingReact: 2,
};

cpp.setTeacher(teacher);
java.setTeacher(teacher);
react.setTeacher(teacher);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
