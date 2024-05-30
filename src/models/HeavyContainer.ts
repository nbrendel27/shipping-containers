import ShippingContainer from "./ShippingContainer";

export default class HeavyContainer implements ShippingContainer {
    destination: string;
    cargoWeight: number;
    tareWeight: number;

    constructor(tw: number, d: string, cw: number = 0) {
        this.destination = d;
        this.cargoWeight = cw;
        this.tareWeight = tw;
    }

    getGrossWeight(): number {return this.cargoWeight + this.tareWeight;}
}