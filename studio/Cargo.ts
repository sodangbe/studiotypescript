import { Payload } from './Payload';
export class Cargo implements Payload{
    // properties and methods
    material:string ;
    massKg:number;
    constructor (material:string , massKg:number){
        this.material= material;
        this.massKg= massKg;
    }

    getMass():number{

        return this.massKg;
    }
 }