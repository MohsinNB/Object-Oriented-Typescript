{
  //
  class Person {
    getSleep() {
      console.log("A random Person sleeping for 8 hours");
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log("A student sleep for 7 hours");
    }
  }
  class Developer extends Person {
    getSleep(): void {
      console.log("A Developer sleep for 6 hours");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  //

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);
}
