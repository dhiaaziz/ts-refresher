
// long type problem
const oldCivic = {
    name: "Civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year.getFullYear()}, Broken: ${this.broken}`;
    }
}

const cola = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `Color: ${this.color}, Carbonated: ${this.carbonated}, Sugar: ${this.sugar}`;
    }
};  

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

// Using an interface to define the structure of a vehicle object
interface Reportable {
    summary(): string;
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

// printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(cola);