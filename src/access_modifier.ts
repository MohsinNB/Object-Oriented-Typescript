{
  //
  class BanckAccount {
    constructor(
      public readonly name: string,
      public readonly id: number,
      private balance: number
    ) {}
    addDeposit = (amount: number): number => {
      this.balance = this.balance + amount;
      return this.balance;
    };
    getBalance = () => {
      return this.balance;
    };
    cutBalance = (amount: number) => {
      return (this.balance = this.balance - amount);
    };
  }

  const poorAccount = new BanckAccount("Tarik", 22, 2000);
  const richAccount = new BanckAccount("Habiba", 12, 20000);
  const newAmount1 = poorAccount.addDeposit(2000);
  const newAmount2 = richAccount.addDeposit(2000);

  const newAmount3 = poorAccount.getBalance(500);
  //   console.log(poorAccount.name);
  //   console.log(richAccount.name);
  //   console.log(newAmount1, newAmount2);
  console.log(newAmount3);
}
