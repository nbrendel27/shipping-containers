import ShippingContainer from "./ShippingContainer";
import Transporter from "./Transporter";

export default class Ship implements Transporter {
    maxWeight: number;
    containers: ShippingContainer[] = [];

    constructor(mw: number) {
        this.maxWeight = mw;
    }

    addContainer (container: ShippingContainer): void {
        this.containers.push(container);
    }

    getTotalWeight (): number {
        if(this.containers.length === 0){return 0;}
        return this.containers.reduce((acc, cv)=> acc+cv.getGrossWeight(),0);
    }

    isOverweight (): boolean {
        if(!this.containers){return false;}
        else if(this.getTotalWeight() <= this.maxWeight) {
            return false;
        }
        return true;
    }
}