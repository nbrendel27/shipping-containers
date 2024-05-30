import {findContainersByDestination, findOverweightTransporters, isSafeToAddToContainer} from "../src/functions";
import HeavyContainer from "../src/models/HeavyContainer";
import LightContainer from "../src/models/LightContainer";
import Ship from "../src/models/Ship";
import ShippingContainer from "../src/models/ShippingContainer";
import Transporter from "../src/models/Transporter";
import Truck from "../src/models/Truck";

describe('findContainersByDestination', ()=> {
   test('LightContainers', ()=>{
     const c = [new LightContainer("Miami"), new LightContainer("New York"), new LightContainer("London")]
     let results= findContainersByDestination(c, "Miami")
     expect(results).toEqual([new LightContainer("Miami")]);
   })
   test('Mixed', ()=>{
    const c = [new LightContainer("Miami"), new HeavyContainer(50, "Miami"), new LightContainer("London")]
    let results= findContainersByDestination(c, "Miami")
    expect(results).toEqual([new LightContainer("Miami"), new HeavyContainer(50, "Miami")]);
  })
  test('None Matching', ()=>{
    const c = [new LightContainer("Miami"), new HeavyContainer(50, "Miami"), new LightContainer("London")]
    let results= findContainersByDestination(c, "Hong Kong")
    expect(results).toEqual([]);
  })
  test('None Matching', ()=>{
    let results= findContainersByDestination([], "Hong Kong");
    expect(results).toEqual([]);
  })
})


describe('findOverweightTransporters', ()=> {
   test('Trucks', ()=>{
     const t: Transporter[] = [new Truck(50), new Truck(50), new Truck(50)];
     t[0].addContainer(new LightContainer("Miami", 50));
     t[1].addContainer(new LightContainer("Miami", 49));
     t[2].addContainer(new LightContainer("Miami", 51));
     let results= findOverweightTransporters(t);
     const t2: Transporter[] = [new Truck(50)];
     t2[0].addContainer(new LightContainer("Miami", 51));
     expect(results).toEqual(t2);
   })
   test('Trucks and Ships', ()=>{
    const t: Transporter[] = [new Ship(50), new Truck(50), new Truck(50)];
    t[0].addContainer(new LightContainer("Miami", 50));
    t[1].addContainer(new LightContainer("Miami", 49));
    t[2].addContainer(new LightContainer("Miami", 51));
    let results= findOverweightTransporters(t);
    const t2: Transporter[] = [new Truck(50)];
    t2[0].addContainer(new LightContainer("Miami", 51));
    expect(results).toEqual(t2);
   })
   test('none matching', ()=>{
    const t: Transporter[] = [new Truck(50), new Truck(50), new Truck(50)];
    t[0].addContainer(new LightContainer("Miami", 49));
    t[1].addContainer(new LightContainer("Miami", 49));
    t[2].addContainer(new LightContainer("Miami", 49));
    let results= findOverweightTransporters(t);
    const t2: Transporter[] = [];
    expect(results).toEqual(t2);
  })
  test('empty input', ()=>{
    const t: Transporter[] = [];
    let results= findOverweightTransporters(t);
    const t2: Transporter[] = [];
    expect(results).toEqual(t2);
  })
})


describe('isSafeToAddContainer', ()=> {
   test('empty ship empty container', ()=>{
     const t: Ship = new Ship(5000)
     const c: LightContainer = new LightContainer("Miami");
     let results=isSafeToAddToContainer(t,c);
     expect(results).toBeTruthy();
   })
   test('empty ship light', ()=>{
    const t: Ship = new Ship(5000)
    const c: LightContainer = new LightContainer("Miami", 50);
    let results=isSafeToAddToContainer(t,c);
    expect(results).toBeTruthy();
  })
  test('empty ship heavy', ()=>{
    const t: Ship = new Ship(5000)
    const c: HeavyContainer = new HeavyContainer(50, "Miami", 50);
    let results=isSafeToAddToContainer(t,c);
    expect(results).toBeTruthy();
  })
  test('empty ship light false', ()=>{
    const t: Ship = new Ship(5000)
    const c: LightContainer = new LightContainer("Miami", 5001);
    let results=isSafeToAddToContainer(t,c);
    expect(results).toBeFalsy();
  })
  test('empty ship heavy false', ()=>{
    const t: Ship = new Ship(5000)
    const c: HeavyContainer = new HeavyContainer(5000, "Miami", 1);
    let results=isSafeToAddToContainer(t,c);
    expect(results).toBeFalsy();
  })
  test('empty ship light true exact', ()=>{
    const t: Ship = new Ship(5000)
    const c: LightContainer = new LightContainer("Miami", 5000);
    let results=isSafeToAddToContainer(t,c);
    expect(results).toBeTruthy();
  })
  test('ship light true', ()=>{
    const t: Ship = new Ship(5000)
    t.addContainer(new LightContainer("Miami", 50));
    const c: LightContainer = new LightContainer("Miami", 50);
    let results=isSafeToAddToContainer(t,c);
    expect(results).toBeTruthy();
  })
  test('ship light false', ()=>{
    const t: Ship = new Ship(5000)
    t.addContainer(new LightContainer("Miami", 5000));
    const c: LightContainer = new LightContainer("Miami", 1);
    let results=isSafeToAddToContainer(t,c);
    expect(results).toBeFalsy();
  })

})
