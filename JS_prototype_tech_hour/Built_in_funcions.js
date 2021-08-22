// //getPrototypeOf
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
//   const prototype = Object.getPrototypeOf(leo)
  
//   console.log(prototype)
//   // {constructor: ƒ, eat: ƒ, sleep: ƒ, play: ƒ}
  
//   prototype === Animal.prototype // true

//   //hasOwnPropery

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
  
//   const leo = new Animal('Leo', 7)
  
//   for(let key in leo) {
//     console.log(`Key: ${key}. Value: ${leo[key]}`)
//   }

//   for(let key in leo) {
//     if (leo.hasOwnProperty(key)) {
//       console.log(`Key: ${key}. Value: ${leo[key]}`)
//     }
//   }

//   //isInstanceOf
//   function Animal (name, energy) {
//     this.name = name
//     this.energy = energy
//   }
  
//   function User () {}
  
//   const leo = new Animal('Leo', 7)
  
//   leo instanceof Animal // true
//   leo instanceof User // false

//   //Agnostic Constructor function

//   function Animal (name, energy) {
//     if (this instanceof Animal === false) {
//       return new Animal(name, energy)
//     }
  
//     this.name = name
//     this.energy = energy
//   }
// const leo = Animal('Leo', 7)