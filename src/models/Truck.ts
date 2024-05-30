import ShippingContainer from "./ShippingContainer";
import Transporter from "./Transporter";

export default class Truck implements Transporter {
    maxWeight: number;
    container: ShippingContainer | null = null;

    constructor(mw: number) {
        this.maxWeight = mw;
    }

    addContainer (container: ShippingContainer): void {
        this.container = container;
    }

    getTotalWeight (): number {
        if(!this.container){return 0;}
        return this.container.getGrossWeight();
    }

    isOverweight (): boolean {
        if(!this.container){return false;}
        else if(this.getTotalWeight() <= this.maxWeight) {
            return false;
        }
        return true;
    }
}