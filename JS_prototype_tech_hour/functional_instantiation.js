//   // Functional Instantiation   
//   function Animal (name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
  
//     animal.eat = function (amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
  
//     animal.sleep = function (length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
  
//     animal.play = function (length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
  
//     return animal
//   }
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)

//   // Functional Instantiation with shared methods
//   const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
  
//   function Animal (name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
//     animal.eat = animalMethods.eat
//     animal.sleep = animalMethods.sleep
//     animal.play = animalMethods.play
  
//     return animal
//   }
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)

//   // Functional Instantiation with shared methods and object.create
//   const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
  
//   function Animal (name, energy) {
//     let animal = Object.create(animalMethods)
//     animal.name = name
//     animal.energy = energy
  
//     return animal
//   }

//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)