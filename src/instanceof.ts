{
  //
  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log("I am making Sound");
    }
  }
  const isDog = (animal: Animal) => {
    return animal instanceof dog;
  };
  const isCat = (animal: Animal) => {
    return animal instanceof cat;
  };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      //animal instanceof dog
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };
  class dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log(`I am ${this.name}`, "I am mewing");
    }
  }

  const myDog = new dog("kutta", "dog");
  const myCat = new cat("bilai", "cat");

  //   myDog.makeBark();
  //   myCat.makeMew();
  getAnimal(myCat);
  getAnimal(myDog);

  //
}
