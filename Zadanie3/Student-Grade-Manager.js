class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grades = []; //lista ocen
    }

    addGrade(grade){
        this.grades = [...this.grades, grade];
    }

    getAverage(){
        if(this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }
}