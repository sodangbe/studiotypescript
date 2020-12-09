import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
export class Rocket implements Payload{
    // properties and methods
    massKg: number;
    name:string ;
    totalCapacityKg :string;
    cargoItems: Cargo[] =[];
    astronauts: Astronaut[] = [];
    constructor (name:string ,totalCapacityKg :string){
        this.name= name;
        this.totalCapacityKg= totalCapacityKg;
    }
    
    sumMass( items : Payload[] ): number {
                
        let sum: number = 0
        /*let sumAstronauts: number = 0
                
        for(let i: number = 0; i < this.cargoItems.length ; i++) {

            sumCargoItems += items[i].massKg;
        }
        // adding the mass of all astronauts 
        for(let i: number = 0; i < this.astronauts.length ; i++) {

            sumAstronauts += items[i].massKg;
        }

        return (sumAstronauts + sumCargoItems);*/

        items.forEach((item) => sum+= item.massKg )

        return sum;
    }

    currentMassKg(): number{

        let totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        
        return totalMass;
    }
     
    canAdd(item: Payload) : boolean {

     return   ((`${this.currentMassKg} + ${item.massKg}`) <= this.totalCapacityKg)? true:false;
  
    }

    addCargo(cargo: Cargo): boolean{

        if (this.canAdd(cargo)){
             this.cargoItems.push(cargo);
             return true;
            }
             else{ 
             return false;
            }
    }

    addAstronaut(astronaut: Astronaut): boolean{

        if (this.canAdd(astronaut)){
             this.astronauts.push(astronaut);
             return true;
            }
             else{ 
             return false;
            }
    }


 }
