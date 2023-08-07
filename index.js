// selecting the gender
let gender = prompt("Select gender");
console.log(gender);

// comparing the gender
if (gender === "male") {
  const salary = prompt("What is your salary?");
  // comparing the salary of male
  salary >= 25000
    ? alert("Your salary is greater than 25k")
    : alert("Your salary is less than 25k");
} else if (gender === "female") {
  const age = prompt("What is your age?");
  // comparing the age of female for marry
  age >= 20
    ? alert("You are eligible for marry")
    : alert("You are not eligible for marry");
}
