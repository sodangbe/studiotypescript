"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    ;
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var prop in items) {
            sum += items[prop].massKg;
        }
        return (sum);
    };
    Rocket.prototype.currentMassKg = function () {
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    };
    Rocket.prototype.canAdd = function (item) {
        return ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (cargo) {
        //return this.canAdd(cargo)? true : false;
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
        //return this.canAdd(astronaut)? true : false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
