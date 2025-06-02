{
  //Class

  class Animal {
    constructor(
      public name: string, //PARAMETER PROPERTIES: I uses public in the type defination, so I don't need to write type and initialized it. the ts compiler automatically do it. It's called perameter properties
      public species: string,
      public age: string | number
    ) {}
    makeSound() {
      console.log(`The ${this.name} is ${this.age} years old`);
    }
  }
  const cat = new Animal("Oreo", "cat", 0.4);
  cat.makeSound();
}
