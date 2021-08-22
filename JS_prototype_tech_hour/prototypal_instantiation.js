// //Prototypal Instantiation

// function Animal (name, energy) {
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy
  
//     return animal
//   }
  
//   Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }
  
//   Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   }
  
//   Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }

// const leo = Animal('Leo', 7)
// const snoop = Animal('Snoop', 10)

// leo.eat(10)
// snoop.play(5)

// //Using the new keyword

// function Animal (name, energy) {
//     this.name = name
//     this.energy = energy
//   }
  
//   Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }
  
//   Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   }
  
//   Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }
  
//   const leo = new Animal('Leo', 7)
//   const snoop = new Animal('Snoop', 10)

//   //Pseudoclassical Instantiation
//   function Animal (name, energy) {
//     this.name = name
//     this.energy = energy
//   }
//   const leo = Animal('Leo', 7)
//   console.log(leo) // undefined


// //Arrow Functions

// const Animal = () => {}

// const leo = new Animal() // Error: Animal is not a constructor

// const Animal = () => {}
// console.log(Animal.prototype) // undefined