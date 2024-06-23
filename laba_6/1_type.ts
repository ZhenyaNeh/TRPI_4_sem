// ===============================================
type Person = {
    id: number;
    name: string;
    group: number;
};

const array: Person[] = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];

// ==============================================

type CarsType = {
    manufacturer?: string;
    model?: string;
}

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

// ===========================================

type ArrayCarsType = {
    cars: CarsType[]
}

const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

// ===========================================

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type DoneType = boolean
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: StudentType[] // массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

const group: GroupType = {
    students: [
        {
            id: 1,
            name: 'Student_1',
            group: 4,
            marks: [
                { subject: "TRPI", mark: 3, done: false },
                { subject: "TPvI", mark: 7, done: true },
                { subject: "OOp", mark: 7, done: true },
            ]
        },
        {
            id: 2,
            name: 'Student_2',
            group: 5,
            marks: [
                { subject: "TRPI", mark: 5, done: true },
                { subject: "TPvI", mark: 2, done: false },
                { subject: "OOp", mark: 6, done: true },
            ]
        },
        {
            id: 3,
            name: 'Student_3',
            group: 6,
            marks: [
                { subject: "TRPI", mark: 9, done: true },
                { subject: "TPvI", mark: 5, done: true },
                { subject: "OOp", mark: 6, done: true },
            ]
        },
    ],
    studentsFilter: function (group: number) {
        return this.students.filter(student => student.group === group);
    },
    marksFilter: function (mark: number) {
        return this.students.filter(student => student.marks.filter(x => x.mark === mark).length > 0);
    },
    deleteStudent: function (id: number) {
        this.students = this.students.filter(student => student.id !== id);
    },
    mark: 6,
    group: 3
}

console.log("Students Func: ");
for (let stud of group.studentsFilter(6)) {
    console.log(stud);
};
console.log("\n\nMarks Func: ");
for (let stud of group.marksFilter(3)) {
    console.log(stud);
}
console.log("\n\nDelete Func: ");
group.deleteStudent(2);
for(let stud of group.students) {
    console.log(stud);
}
