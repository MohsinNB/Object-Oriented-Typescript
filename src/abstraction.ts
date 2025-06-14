{
  //Abstraction

  interface Vehicle1 {
    name: string;
    model: number;
  }
  class car implements Vehicle1 {
    constructor(public name: string, public model: number) {}
    move(): void {
      console.log(`The ${this.name} is moving`);
    }
  }

  const MyCar = new car("Bugatti", 200);
  console.log(MyCar.move());

  //Another example of real life implementation of Abstraction

  abstract class paymentProcessor {
    abstract Pay(amount: number): void;

    validation(): void {
      console.log(`The payment is validate`);
    }
  }

  class payPal extends paymentProcessor {
    Pay(amount: number): void {
      console.log(`Amount ${amount} paid successfully`);
    }
  }
  const processPayment = (processor: paymentProcessor, amount: number) => {
    processor.validation();
    processor.Pay(amount);
  };

  const paypal = new payPal();
  console.log(processPayment(paypal, 72220));
  //
}
