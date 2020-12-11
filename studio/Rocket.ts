import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
export class Rocket {
    // properties and methods
   
    name:string ;
    totalCapacityKg : number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor (name:string ,totalCapacityKg :number){
        this.name= name;
        this.totalCapacityKg= totalCapacityKg;
        
    };
    
    sumMass( items: Payload[] ): number {
      
        let sum = 0;
       
        for (let prop in items) {
          sum += items[prop].massKg;
        }
        return (sum);
    }

  
    currentMassKg(): number{
              
    return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems))
        
    }
     
    canAdd(item: Payload) : boolean {
         
        
        return ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg);
  
    }

    addCargo(cargo: Cargo): boolean{
    
     //return this.canAdd(cargo)? true : false;
     if(this.canAdd(cargo)){
         this.cargoItems.push(cargo);
         return true;
     }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
           return false;
       //return this.canAdd(astronaut)? true : false;
    }


 }

