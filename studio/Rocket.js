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
        var totalMassAstronauts = 0;
        var totalMassCargoItems = 0;
        (this.astronauts.length > 0) ? totalMassAstronauts = +this.sumMass(this.astronauts) : totalMassAstronauts = 0;
        (this.cargoItems.length > 0) ? totalMassCargoItems = +this.sumMass(this.cargoItems) : totalMassCargoItems = 0;
        console.log(totalMassCargoItems + totalMassAstronauts);
        return totalMassCargoItems + totalMassAstronauts;
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
