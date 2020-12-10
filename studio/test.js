//let array = [
   // {name: "Peter", age: 43},
    //{name: "John", age: 32},
   // {name: "Jake", age: 21}
  //];
  class Cargo {
    // properties and methods
    material ;
    massKg;
    constructor (massKg,material){
        this.material= material;
        this.massKg= massKg;
    }

   }
  let cargo = [
    new Cargo(3107.39, "Satellite"),
    new Cargo(1000.39, "Space Probe"),
    new Cargo(753, "Water"),
    new Cargo(541, "Food"),
    new Cargo(2107.39, "Tesla Roadster"),
 ];
  
//  let sum = cargo.reduce(function(sum, current) {
//     return sum + current.cargo[massKg];
//   }, 0);
  console.log(cargo);
let sum = 0;
 //console.log(sum);
for(let item in cargo){
//console.log(cargo[item].massKg);
sum += cargo[item].massKg
}
// cargo.array.forEach(element => {
//     sum += cargo[element].massKg
// });

console.log(sum);