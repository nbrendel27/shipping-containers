import LightContainer from "../src/models/LightContainer";
import Truck from "../src/models/Truck";

describe('Truck', ()=> {
   test('maxWeight constructor', ()=>{
     let results: Truck= new Truck(50)
     expect(results.maxWeight).toBe(50);
   })
   test('container constructor', ()=>{
    let results: Truck= new Truck(50)
    expect(results.container).toBeNull();
   })
   test('addContainer', ()=>{
    let results: Truck= new Truck(50)
    results.addContainer(new LightContainer("Miami"));
    expect(results.container).toEqual(new LightContainer("Miami"));
  })
  test('getWeight', ()=>{
    let results: Truck= new Truck(50)
    results.addContainer(new LightContainer("Miami", 50));
    expect(results.getTotalWeight()).toBe(50);
  })
  test('getWeight null', ()=>{
    let results: Truck= new Truck(50)
    // results.addContainer(new LightContainer("Miami", 50));
    expect(results.getTotalWeight()).toBe(0);
  })
  test('isOverweight under', ()=>{
    let results: Truck= new Truck(50)
    results.addContainer(new LightContainer("Miami", 49));
    expect(results.isOverweight()).toBeFalsy();
  })
  test('isOverweight over', ()=>{
    let results: Truck= new Truck(50)
    results.addContainer(new LightContainer("Miami", 51));
    expect(results.isOverweight()).toBeTruthy();
  })
  test('isOverweight equal', ()=>{
    let results: Truck= new Truck(50)
    results.addContainer(new LightContainer("Miami", 50));
    expect(results.isOverweight()).toBeFalsy();
  })

})
