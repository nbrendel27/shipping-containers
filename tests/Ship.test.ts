import HeavyContainer from "../src/models/HeavyContainer";
import LightContainer from "../src/models/LightContainer";
import Ship from "../src/models/Ship";

describe('Ship', ()=> {
   test('maxWeight constructor', ()=>{
     let results: Ship= new Ship(50)
     expect(results.maxWeight).toBe(50);
   })
   test('container constructor', ()=>{
    let results: Ship= new Ship(50)
    expect(results.containers).toEqual([]);
   })
   test('addContainer', ()=>{
    let results: Ship= new Ship(50)
    results.addContainer(new LightContainer("Miami"));
    expect(results.containers).toEqual([new LightContainer("Miami")]);
  })
  test('getWeight', ()=>{
    let results: Ship= new Ship(50)
    results.addContainer(new LightContainer("Miami", 50));
    expect(results.getTotalWeight()).toBe(50);
  })
  test('getWeight null', ()=>{
    let results: Ship= new Ship(50)
    // results.addContainer(new LightContainer("Miami", 50));
    expect(results.getTotalWeight()).toBe(0);
  })
  test('getWeight', ()=>{
    let results: Ship= new Ship(50)
    results.addContainer(new LightContainer("Miami", 50));
    results.addContainer(new LightContainer("New York", 50));
    results.addContainer(new LightContainer("London", 50));
    expect(results.getTotalWeight()).toBe(150);
  })
  test('getWeight', ()=>{
    let results: Ship= new Ship(50)
    results.addContainer(new HeavyContainer(50, "Miami", 50));
    results.addContainer(new LightContainer("New York", 50));
    results.addContainer(new LightContainer("London", 50));
    expect(results.getTotalWeight()).toBe(200);
  })
  test('isOverweight under', ()=>{
    let results: Ship= new Ship(50)
    results.addContainer(new LightContainer("Miami", 49));
    expect(results.isOverweight()).toBeFalsy();
  })
  test('isOverweight over', ()=>{
    let results: Ship= new Ship(50)
    results.addContainer(new LightContainer("Miami", 51));
    expect(results.isOverweight()).toBeTruthy();
  })
  test('isOverweight equal', ()=>{
    let results: Ship= new Ship(50)
    results.addContainer(new LightContainer("Miami", 50));
    expect(results.isOverweight()).toBeFalsy();
  })

})