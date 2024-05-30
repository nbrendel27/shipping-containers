import Ship from "./models/Ship";
import ShippingContainer from "./models/ShippingContainer";
import Transporter from "./models/Transporter";


export function findContainersByDestination(containers: ShippingContainer[], destination: string): ShippingContainer[] {
    const ret: ShippingContainer[] = [];
    containers.forEach((c) => {
        if(c.destination === destination) {
            ret.push(c);
        }
    });
    
    return ret;
}

export function findOverweightTransporters(transporters: Transporter[]): Transporter[] {
    const ret: Transporter[] = [];
    transporters.forEach((t) => {
        if(t.isOverweight()) {
            ret.push(t);
        }
    });
    return ret;
}

export function isSafeToAddToContainer(ship: Ship, container: ShippingContainer): boolean {
    if(ship.getTotalWeight()+ container.getGrossWeight() > ship.maxWeight) {
        return false;
    }
    
    return true;
}