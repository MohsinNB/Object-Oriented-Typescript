{
  //
  class counter {
    static count: number = 0;
    increment = () => {
      return (counter.count = counter.count + 1);
    };
    decrement = () => {
      return (counter.count = counter.count - 1);
    };
  }

  const instance1 = new counter();
  console.log(instance1.increment());
  const instance2 = new counter();

  console.log(instance2.increment());
  console.log(instance2.increment());
  console.log(instance2.increment());

  //
}
