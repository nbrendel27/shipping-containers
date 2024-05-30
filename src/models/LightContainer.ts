import ShippingContainer from "./ShippingContainer";

export default class LightContainer implements ShippingContainer {
    destination: string;
    cargoWeight: number;

    constructor(d: string, cw: number = 0) {
        this.destination = d;
        this.cargoWeight = cw;
    }

    getGrossWeight(): number {return this.cargoWeight;}
}