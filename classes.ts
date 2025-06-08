class Vehicle {
    constructor(color: string) {}
    protected drive(): void {
        console.log("vroom");
    }
}

class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color);
    }
    private honk(): void {
        console.log("beep beep");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle("orange");
const car = new Car(4,"red");
car.startDrivingProcess();

