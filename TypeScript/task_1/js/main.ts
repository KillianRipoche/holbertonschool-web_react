interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false,
};

console.log('Teacher object:', teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};

console.log('Director object:', director1);


interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}


interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}


class StudentClass implements StudentClassInterface {
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}


const student = new StudentClass('Alice', 'Durand');

console.log('displayName:', student.displayName());
console.log('workOnHomework:', student.workOnHomework());
console.log('printTeacher result:', printTeacher("John", "Doe"));
console.log('printTeacher result:', printTeacher("Alice", "Martin"));
