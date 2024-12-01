class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grades = []; //lista ocen
    }

    addGrade(grade){ //metoda dodawania ocen
        this.grades = [...this.grades, grade];
    }

    getAverage(){ //metoda sredniej
        if(this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);//suma
        return total / this.grades.length;
    }
}

    //Utworzenie nowych studentow
    const student1 = new Student('Jan Ziębowski', 17);
    const student2 = new Student('Anna Nowak', 18);
    const student3 = new Student('Robert Lewandowski', 20);

    //Dodanie ocen
    student1.addGrade(5);
    student1.addGrade(4);
    student1.addGrade(3);

    student2.addGrade(5);
    student2.addGrade(4);
    student2.addGrade(5);

    student3.addGrade(6);
    student3.addGrade(5);
    student3.addGrade(4);


    // Obliczamy średnia
    console.log(`${student1.name} średnia: ${student1.getAverage()}`);
    console.log(`${student2.name} średnia: ${student2.getAverage()}`);
    console.log(`${student3.name} średnia: ${student3.getAverage()}`);



