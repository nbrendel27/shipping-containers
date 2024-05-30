import ShippingContainer from "./ShippingContainer";

export default interface Transporter {
    maxWeight: number;

    addContainer: (conatainer: ShippingContainer) => void;
    getTotalWeight: () => number;
    isOverweight: () => boolean;

}