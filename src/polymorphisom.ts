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

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectengle extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }
    getArea(): number {
      return this.height * this.width;
    }
  }
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new circle(14);
  const shape3 = new Rectengle(3, 4);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
  //
}
