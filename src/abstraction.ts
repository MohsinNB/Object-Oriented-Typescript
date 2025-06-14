{
  //Abstraction

  interface Vehicle1 {
    name: string;
    model: number;
  }
  class car implements Vehicle1 {
    constructor(public name: string, public model: number) {}
    move(): void {
      console.log(`The car is moving`);
    }
  }

  const MyCar = new car("Bugatti", 200);
  console.log(MyCar.move());
}
