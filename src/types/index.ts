export type SubjectMark = Record<string, number>;
export type SubjectStudents = Record<string, string[]>

export type PercentObject = {
  name: string;
  percent: number;
};

export type Mark = {
  subject: string;
  mark: number;
};

export type Student = {
  name: string;
  id: string;
  marks: Mark[];
};

export interface ClassObj {
  name: string;
  teacherName: string;
  students: Student[];
}

export type StudentTotal = {
  name: string;
  studentTotal: number;
};

export type StudentMark = {
  name: string;
  mark: number;
};

export type StudentPercent = {
  subject: string;
  percent: number;
};

export type MinMax = {
  minPercent: number;
  maxPercent: number;
};

export type SubjectDetails = Record<string, MarkArray>;

export type MarkArray = {
  mark: number[];
};

export type QuestionObj = {
    question: string,
    id: number,
    hasProps: boolean,
    inputList?: string[]
}
