{
  //  type guard is a technique using at typescript that dealing with the variable types and narrowing it.There is a number of typeguards available in ts.

  //typeof
  type alphaNeumeric = number | string;
  const add = (param1: alphaNeumeric, param2: alphaNeumeric): alphaNeumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  //type in
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mohsin",
  };
  const adminUser: AdminUser = {
    name: "Mohsin",
    role: "admin",
  };
  getUser(normalUser);
  getUser(adminUser);
}
