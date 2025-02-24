/*
class Person {
    // Constructor method is called when a new instance is created
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Static method (called on the class itself, not on instances)
    static info() {
      console.log('This is a Person class.');
    }
  }
  
  // Creating an instance of the class
  const person1 = new Person('Alice', 30);
  
  // Accessing properties and methods
  console.log(person1.name); // Output: Alice
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  
  // Calling a static method
  Person.info(); // Output: This is a Person class.
  */



  //new class where base class is animal, and have subclass like birds and fish
class Animal{
    constructor(name, habitat){
        this.name = name;
        this.habitat = habitat;
    }
    describe(){
        console.log(`${this.name} lives in ${this.habitat}.`);
    }
}

    //aba subclass bird vaneyra garauni, jun inheritance of animal ho
    class Bird extends Animal{
        constructor(name, habitat){
            super(name,habitat); // yesma mathi parent class , constructor lai call garxa
        
        }
        fly(){
            console.log(`${this.name} is flying !`);
        }
    }
        //aba fish ko describe garni kehi
        class Fish extends Animal{
            constructor(name, habitat){
                super(name,habitat); // yesma mathi parent class , constructor lai call garxa
            
            }
        swim(){
            super.describe();
            console.log(`${this.name} can swim.`);
        }
    }

    // aba yesma chai example dini , kunai ni mathi call vako class ko bareyma

    const eagle= new Bird("Eagle", "Mountains");
    eagle.describe();
    eagle.fly();

    const shark =new Fish("Shark", "ocean");
    shark.describe();
    shark.swim();