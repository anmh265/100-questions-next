import { ClassObj, Student } from '@/types';

export function printSchoolClass(obj: ClassObj) {
  return obj.name;
}

export function printTeacherName(obj: ClassObj) {
  return obj.teacherName;
}

export function printStudentsName(obj: ClassObj) {
  const studentsList = obj.students;

  const studentNameList = studentsList.map((student: Student) => {
   return student.name
  });

  return studentNameList
}

export function printStudentsId(obj: ClassObj) {
  const studentsList = obj.students;

  const studentIdList = studentsList.map((student: Student) => {
    return student.id
  });

  return studentIdList
}