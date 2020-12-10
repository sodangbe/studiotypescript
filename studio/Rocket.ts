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
         
        // let totalMassAstronauts:number= 0;
        // let totalMassCargoItems:number= 0;
         
        //  (this.astronauts.length > 0 ) ? totalMassAstronauts =+ this.sumMass(this.astronauts) : totalMassAstronauts = 0 ;  
        //  (this.cargoItems.length > 0 ) ? totalMassCargoItems =+ this.sumMass(this.cargoItems) : totalMassCargoItems = 0 ;  
      
        // console.log(totalMassCargoItems + totalMassAstronauts);
        
        //return totalMassCargoItems + totalMassAstronauts;
        
        return this.totalCapacityKg - (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems))
        
    }
     
    canAdd(item: Payload) : boolean {
     
        //let num : number = item.massKg;
     
        //return   ((+this.currentMassKg + num) <= this.totalCapacityKg)? true:false;

        return ((this.currentMassKg() + item.massKg) < this.totalCapacityKg)? true:false;
  
    }

    addCargo(cargo: Cargo): boolean{

        // if (this.canAdd(cargo)){
        //      this.cargoItems.push(cargo);
        //      return true;
        //     }
        //      else{ 
        //      return false;
        //     }
       
        //console.log(this.canAdd(cargo)? true : false)
       return this.canAdd(cargo)? true : false;
        //return false
    }

    addAstronaut(astronaut: Astronaut): boolean{

        // if (this.canAdd(astronaut)){
        //      this.astronauts.push(astronaut);
        //      return true;
        //     }
        //      else{ 
        //      return false;
        //     }
        //console.log(this.canAdd(astronaut)? true : false)
        return this.canAdd(astronaut)? true : false;
    }


 }

