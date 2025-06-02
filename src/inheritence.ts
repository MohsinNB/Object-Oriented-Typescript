{
  class Student {
    constructor(
      public name: string,
      public age: string,
      public semester: string
    ) {}
    studyHour(hours: number) {
      console.log(`Student name:${this.name} studied ${hours} hours daily`);
    }
  }
  const Studentme = new Student("Mohsin", "20", "Diploma last year");
  Studentme.studyHour(8);
  console.log(Studentme.age);

  // First class
  class student1 extends Student {
    constructor(name: string, age: string, semester: string) {
      super(name, age, semester);
    }
  }

  // Second class
  class student2 extends Student {
    activities: string;
    constructor(
      name: string,
      age: string,
      semester: string,
      activities: string
    ) {
      super(name, age, semester);
      this.activities = activities;
    }

    getAward(name: string) {
      console.log(`${student2.name} got ${name} award`);
    }
  }

  const averageStudent = new student1("Fuad", "20", "7th");

  averageStudent.studyHour(10);
  console.log(averageStudent);

  const brightStudent = new student2("Mohsin", "20", "7th", "web developer");
  console.log(brightStudent);
  brightStudent.getAward("ph madel");
  brightStudent.studyHour(12);
}
