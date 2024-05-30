import HeavyContainer from "../src/models/HeavyContainer";


describe('HeavyContainer', ()=> {
    test('destination set', ()=>{
      let results: HeavyContainer= new HeavyContainer(50, "Miami");
      expect(results.destination).toBe("Miami");
    })
    test('weight set', ()=>{
     let results: HeavyContainer= new HeavyContainer(50, "Miami", 50);
     expect(results.cargoWeight).toBe(50);
    })
    test('tare weight set', ()=>{
        let results: HeavyContainer= new HeavyContainer(50, "Miami", 50);
        expect(results.tareWeight).toBe(50);
       })
    test('weight default', ()=>{
     let results: HeavyContainer= new HeavyContainer(50, "Miami");
     expect(results.cargoWeight).toBe(0);
    })
    test('getGrossWeight', ()=>{
     let results: HeavyContainer= new HeavyContainer(50, "Miami", 50);
     expect(results.getGrossWeight()).toBe(100);
    })
    test('getGrossWeight', ()=>{
      let results: HeavyContainer= new HeavyContainer(50, "Miami", 525);
      expect(results.getGrossWeight()).toBe(575);
    })
 })