{
  //
  class BanckAccount {
    constructor(
      public readonly name: string,
      public readonly id: number,
      private _balance: number
    ) {}
    /*
    addDeposit = (amount: number): number => {
      this._balance = this._balance + amount;
      return this._balance;
    };
    getBalance = () => {
      return this._balance;
    };
    cutBalance = (amount: number) => {
      return (this._balance = this._balance - amount);
    };
    */

    //getter
    get balance() {
      return this._balance;
    }

    // setter
    set newDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const poorAccount = new BanckAccount("Tarik", 22, 2000);
  const richAccount = new BanckAccount("Habiba", 12, 20000);

  const preBalance = poorAccount.balance;
  const currentBalance = (poorAccount.newDeposit = 50);

  console.log(preBalance, currentBalance);
}
