var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var group = {
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
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (mark) {
        return this.students.filter(function (student) { return student.marks.filter(function (x) { return x.mark === mark; }).length > 0; });
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    },
    mark: 6,
    group: 3
};
console.log("Students Func: ");
for (var _i = 0, _a = group.studentsFilter(6); _i < _a.length; _i++) {
    var stud = _a[_i];
    console.log(stud);
}
;
console.log("\n\nMarks Func: ");
for (var _b = 0, _c = group.marksFilter(3); _b < _c.length; _b++) {
    var stud = _c[_b];
    console.log(stud);
}
console.log("\n\nDelete Func: ");
group.deleteStudent(2);
for (var _d = 0, _e = group.students; _d < _e.length; _d++) {
    var stud = _e[_d];
    console.log(stud);
}
