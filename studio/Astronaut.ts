import { Payload } from './Payload';
export class Astronaut implements Payload {
    // properties and methods
    name:string ;
    massKg:number;
    constructor ( massKg:number,name:string){
        this.name= name;
        this.massKg= massKg;
    }

   }

 