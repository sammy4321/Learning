// Base class (Parent)
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method in the base class
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class (Child)
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);  // Call the parent class constructor
        this.breed = breed;
    }

    // Method overriding
    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

// Another Derived class
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    // Method overriding
    speak() {
        console.log(`${this.name}, the ${this.color} cat, meows.`);
    }
}

// Creating instances of the classes
const dog = new Dog("Buddy", 3, "Golden Retriever");
const cat = new Cat("Whiskers", 2, "black");

// Using the methods
dog.speak();  // Output: Buddy, the Golden Retriever, barks.
cat.speak();  // Output: Whiskers, the black cat, meows.
