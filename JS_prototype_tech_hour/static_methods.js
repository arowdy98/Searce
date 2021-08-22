// //ES6
// class Animal {
//     constructor(name, energy) {
//       this.name = name
//       this.energy = energy
//     }
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//     static nextToEat(animals) {
//       const sortedByLeastEnergy = animals.sort((a,b) => {
//         return a.energy - b.energy
//       })
  
//       return sortedByLeastEnergy[0].name
//     }
//   }
//   const leo = new Animal('Leo', 7)
//   const snoop = new Animal('Snoop', 10)
  
//   console.log(Animal.nextToEat([leo, snoop]))

//   //ES5
//   function Animal (name, energy) {
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
  
//   Animal.nextToEat = function (animals) {
//     const sortedByLeastEnergy = animals.sort((a,b) => {
//       return a.energy - b.energy
//     })
  
//     return sortedByLeastEnergy[0].name
//   }
  
//   const leo = new Animal('Leo', 7)
//   const snoop = new Animal('Snoop', 10)
  
//   console.log(Animal.nextToEat([leo, snoop]))