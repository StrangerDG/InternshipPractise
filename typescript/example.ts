// // Define a User interface
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     isActive: boolean;
//   }
  
//   // Function to create a new user
//   function createUser(id: number, name: string, email: string): User {
//     return {
//       id,
//       name,
//       email,
//       isActive: true, // Default value
//     };
//   }
  
//   // Function to deactivate a user
//   function deactivateUser(user: User): User {
//     return {
//       ...user,
//       isActive: false, // Update isActive to false
//     };
//   }
  
//   // List of users (TypeScript infers this as `User[]`)
//   let users: User[] = [];
  
//   // Add some users
//   users.push(createUser(1, "Alice", "alice@example.com"));
//   users.push(createUser(2, "Bob", "bob@example.com"));
  
//   // Deactivate the first user
//   users[0] = deactivateUser(users[0]);
  
//   // Display the user list
//   console.log("User List:", users);
  

/*
interface MathOperations {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calculator: MathOperations = {
  add: (a, b) => a + b,
  subtract: (x, y) => x - y,
};

console.log(calculator.add(10, 5)); // 15

console.log(calculator.subtract(20, 7));
*/

 /*
interface Person {
  name: string;
  age: number;
  hello(): void;
}

const person: Person ={
  name: "Dipak",
  age: 24,
  hello(){
    console.log( `my name is ${this.name} and my age is ${this.age}`);
  }
};

person.hello();

*/

let message: string = "Hello, TypeScript!";
let age: number = 25;
let isStudent: boolean = false;
