{
  //
  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log("I am making Sound");
    }
  }
  const getAnimal = (animal: Animal) => {
    if (animal instanceof dog) {
      animal.makeBark();
    } else if (animal instanceof cat) {
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
      console.log("I am mewing");
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
