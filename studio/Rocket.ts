import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        // return sum of all items using each item's massKg property
        let totalMass: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    }
    currentMassKg(): number {
        // use this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item: Payload): boolean {
        // return true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo: Cargo): boolean {
        // use this.canAdd() to see if another item can be added
        // if true add cargo to this.cargoItems and return true
        // if false return false
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        // use this.canAdd() to see if another astronaut can be added
        // if true add astronaut to this.astronauts and return true
        // if false return false
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}