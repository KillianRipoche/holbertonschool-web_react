import { Teacher } from './Teacher';

export default class Subject {
  protected teacher: Teacher | undefined;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
