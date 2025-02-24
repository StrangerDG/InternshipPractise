// for loop 

// for(i=1; i<=10; i++){
//     //backticks are used to string concatination also called string interpolation 
//     console.log(`5 X ${i} = ${5*i}`);
// }

//object destructuring 
const person = {
    name: "Alice",
    age: 25,
    job: "Developer",
  };
  
  // Destructure properties from the object
  const { name, age, job } = person;
  
  console.log(name); // "Alice"
  console.log(age);  // 25
  console.log(job);  // "Developer"
  