import LightContainer from "../src/models/LightContainer";

describe('LightContainer', ()=> {
   test('destination set', ()=>{
     let results: LightContainer= new LightContainer("Miami");
     expect(results.destination).toBe("Miami");
   })
   test('weight set', ()=>{
    let results: LightContainer= new LightContainer("Miami", 50);
    expect(results.cargoWeight).toBe(50);
   })
   test('weight default', ()=>{
    let results: LightContainer= new LightContainer("Miami");
    expect(results.cargoWeight).toBe(0);
   })
   test('getGrossWeight', ()=>{
    let results: LightContainer= new LightContainer("Miami", 50);
    expect(results.getGrossWeight()).toBe(50);
   })
   test('getGrossWeight', ()=>{
     let results: LightContainer= new LightContainer("Miami", 525);
     expect(results.getGrossWeight()).toBe(525);
   })
})
