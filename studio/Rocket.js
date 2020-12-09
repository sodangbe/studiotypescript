"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        /*let sumAstronauts: number = 0
                
        for(let i: number = 0; i < this.cargoItems.length ; i++) {

            sumCargoItems += items[i].massKg;
        }
        // adding the mass of all astronauts
        for(let i: number = 0; i < this.astronauts.length ; i++) {

            sumAstronauts += items[i].massKg;
        }

        return (sumAstronauts + sumCargoItems);*/
        items.forEach(function (item) { return sum += item.massKg; });
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return totalMass;
    };
    Rocket.prototype.canAdd = function (item) {
        var num = item.massKg;
        return ((+this.currentMassKg + num) <= this.totalCapacityKg) ? true : false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
