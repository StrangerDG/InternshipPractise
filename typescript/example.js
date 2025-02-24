// // Define a User interface
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     isActive: boolean;
//   }
var person = {
    name: "Dipak",
    age: 24,
    hello: function () {
        console.log("my name is ".concat(this.name, " and my age is ").concat(this.age));
    }
};
person.hello();
