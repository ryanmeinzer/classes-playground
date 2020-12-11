// use a class as a template to create an object with properties

class Dog {
    constructor(name, breed, age) {
        this.name = name,
        this.breed = breed,
        this.age = age
    }


// use a class method to operate on a class instance
    nameAndAge() {
        return this.name + " " + this.age
    }

}

// create an object with the class

let dog1 = new Dog('Spoony', 'Rottweiler', 11)
let dog2 = new Dog('Jack', 'German Shephard', 3)

console.log(dog1)
console.log(dog2)

console.log(dog2.nameAndAge())