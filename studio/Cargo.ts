import { Payload } from './Payload';
export class Cargo implements Payload{
    // properties and methods
    material:string ;
    massKg:number;
    constructor (massKg:number,material:string){
        this.material= material;
        this.massKg= massKg;
    }
    
    //takes an array of cargoItems objects and return a payload array 
   
 
 }