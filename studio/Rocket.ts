import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
export class Rocket {
    // properties and methods
    
    name:string ;
    totalCapacityKg : number;
    cargoItems: Cargo[] =[];
    astronauts: Astronaut[] = [];
    constructor (name:string ,totalCapacityKg :number){
        this.name= name;
        this.totalCapacityKg= totalCapacityKg;
        
    }
    
    
    sumMass( items : Payload[] ): number {
                
        let sum: number = 0
    
    }

    currentMassKg(): number{

        let totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        console.log(this.astronauts);
        return totalMass;
    }
     
    canAdd(item: Payload) : boolean {
     
        let num : number = item.massKg;
     
        return   ((+this.currentMassKg + num) <= this.totalCapacityKg)? true:false;
  
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
