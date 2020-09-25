const name = "oraclian",
  age = 27,
  gender = "male";

const sayHi = (
  name: string,
  age: number,
  gender: "male" | "female"
): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi(name, age, gender));

export {};
